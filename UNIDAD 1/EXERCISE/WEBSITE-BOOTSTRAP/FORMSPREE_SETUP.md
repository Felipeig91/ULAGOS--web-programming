# Configuración de Formspree - Envío de Correos

El formulario ya está configurado para usar **Formspree**, un servicio que permite enviar correos sin servidor.

## 🚀 Pasos para Configurar

### 1. Registrate en Formspree

- Ve a https://formspree.io
- Haz clic en **"Sign Up"**
- Completa el registro con tu email

### 2. Crea un Nuevo Formulario

- Una vez registrado, haz clic en **"New"**
- Selecciona **"Create a form"**
- Ingresa un nombre para tu formulario (ej: "Contacto")

### 3. Obtén tu Token

Después de crear el formulario, verás un código como este:

```
https://formspree.io/f/ABCDEF123
```

El token es: **`ABCDEF123`**

### 4. Actualiza tu Sitio

En el archivo `index.html`, busca la línea:

```html
<form action="https://formspree.io/f/xyzgwqdo" method="POST"></form>
```

Reemplaza **`xyzgwqdo`** con tu token:

```html
<form action="https://formspree.io/f/TUTOKEN" method="POST"></form>
```

### 5. ¡Listo!

Ahora tu formulario funcionará y recibirás los mensajes en tu email.

## ✅ Verificación

1. Abre tu sitio en el navegador
2. Ve a la sección **Contacto**
3. Completa el formulario y haz clic en **Enviar**
4. Deberías recibir un email de confirmación
5. Haz clic en el enlace de confirmación en el email
6. ¡A partir de ese momento funciona todo!

## 📝 Notas Importantes

- **Primer envío**: Deberás confirmar el email antes de que funcione
- **Almacenamiento**: Tus mensajes se guardan en el panel de Formspree
- **Gratuito**: El plan gratuito incluye hasta 50 mensajes por mes
- **Sin servidor**: No necesitas PHP ni base de datos

## 🔧 Personalización Avanzada

Si quieres agregar campos adicionales al formulario, solo agrega:

```html
<input type="text" name="telefono" placeholder="Tu teléfono" />
```

Lo importante es el atributo `name` - ese es el que Formspree usa.

## 📧 Cambiar Email de Destino

En tu panel de Formspree puedes cambiar el email destino en cualquier momento en las configuraciones del formulario.

---

**¡Cuenta regresiva para que tu sitio reciba correos!** ✨
