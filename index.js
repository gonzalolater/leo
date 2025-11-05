const nodemailer = require('nodemailer');
require('dotenv').config();

// Configuración de la hora para el contador del correo
const MINUTO = 60000; // 60,000 milisegundos = 1 minuto
let contador = 0;

// 1. Configura el transportador SMTP 
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS 
    }
});

// Función para enviar el correo
async function enviarCorreoMolesto() {
    contador++; // Incrementa el contador global con cada envío
    
    const ASUNTO_FIJO = "¡La Broma Eterna Sigue Corriendo!";
    const CUERPO_FIJO = "¡Alerta! Tu servidor de mensajes molestos está activo. Prepara la bandeja de entrada.";
    
    const mailOptions = {
        from: process.env.GMAIL_USER,
        to: process.env.HERMANO_MAIL,
        subject: `${ASUNTO_FIJO} (Correo #${contador})`,
        text: `${CUERPO_FIJO}\n\nEste es el correo número ${contador} enviado hasta ahora.`
    };

    try {
        let info = await transporter.sendMail(mailOptions);
        console.log(`[${new Date().toLocaleTimeString()}] ✅ Enviado # ${contador}. ID: ${info.messageId}`);
    } catch (error) {
        console.error(`[${new Date().toLocaleTimeString()}] ❌ Error al enviar el correo # ${contador}:`, error.message);
    }
}

// 2. Verifica la conexión y luego inicia el intervalo de envío
transporter.verify()
    .then(() => {
        console.log('\n✅ Conexión SMTP verificada correctamente');
        console.log(`Node iniciado. El primer correo se enviará en 1 minuto y se repetirá cada minuto.`);
        console.log('Presiona Ctrl + C para detener el nodo.\n');
    })
    .catch(error => {
        console.error('❌ Error en la verificación SMTP:', error);
        process.exit(1);
    });

// Inicia el primer envío después de 1 minuto (para dar tiempo a que se inicie el nodo)
setTimeout(() => {
    enviarCorreoMolesto();
    
    // Configura el intervalo para envíos posteriores cada minuto
    setInterval(enviarCorreoMolesto, MINUTO);
}, MINUTO);

// Para que el nodo no se cierre inmediatamente
// No es estrictamente necesario, pero es una buena práctica para procesos largos
process.on('SIGINT', () => {
    console.log('\nNodo detenido. El ataque de correos ha terminado.');
    process.exit();
});