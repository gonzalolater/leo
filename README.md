# Email Automation Script

Este script de Node.js está diseñado para enviar correos electrónicos automáticos de forma periódica utilizando Gmail.

## Características

- Envía correos electrónicos automáticamente cada minuto
- Utiliza el servicio SMTP de Gmail
- Cuenta el número de correos enviados
- Manejo de errores y registro de eventos
- Configuración segura mediante variables de entorno

## Configuración

1. Instalar las dependencias:
```bash
npm install
```

2. Crear un archivo `.env` con las siguientes variables:
```
GMAIL_USER=tu_correo@gmail.com
GMAIL_PASS=tu_contraseña_de_aplicacion
HERMANO_MAIL=correo_destino@gmail.com
```

**Nota importante**: Para que funcione correctamente, necesitas:
- Tener activada la verificación en dos pasos en tu cuenta de Gmail
- Generar una contraseña de aplicación específica en la configuración de seguridad de Google

## Uso

Para iniciar el script:
```bash
node index.js
```

El script:
- Iniciará y verificará la conexión SMTP
- Esperará 1 minuto antes de enviar el primer correo
- Enviará un correo cada minuto
- Mostrará confirmación por cada correo enviado
- Se puede detener con Ctrl + C

## Estructura del Proyecto

```
.
├── index.js          # Script principal
├── .env             # Archivo de configuración (no versionado)
├── package.json     # Dependencias y configuración del proyecto
└── README.md        # Este archivo
```

## Dependencias

- nodemailer: Para el envío de correos
- dotenv: Para manejar variables de entorno

## Seguridad y Uso Ético

⚠️ Este proyecto es solo para fines recreativos y educativos. Por favor, lee el archivo [SECURITY.md](SECURITY.md) para información importante sobre el uso responsable de este código.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.