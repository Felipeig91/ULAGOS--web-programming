# Sitio Web Bootstrap

Estructura completa de un sitio web creado con **Bootstrap 5**.

## 📁 Estructura del Proyecto

```
WEBSITE-BOOTSTRAP/
├── index.html                # Página principal
├── README.md                 # Este archivo
├── SEGURIDAD.md              # Guía de seguridad (claves API)
├── FORMSPREE_SETUP.md        # Configuración de contacto
├── .env-example              # Plantilla de variables de entorno
├── .gitignore                # Archivos ignorados por Git
├── css/
│   └── style.css             # Estilos personalizados con comentarios
├── js/
│   └── script.js             # Scripts con documentación
└── assets/
    ├── images/               # Imágenes del sitio
    └── fonts/                # Fuentes personalizadas
```

## 🚀 Características

- ✅ Estructura HTML5 semántica
- ✅ Bootstrap 5 CDN integrado
- ✅ Navegación responsiva
- ✅ Hero section con imagen
- ✅ Sección de servicios con tarjetas
- ✅ Formulario de contacto
- ✅ Footer
- ✅ Estilos personalizados
- ✅ Scripts interactivos
- ✅ Diseño completamente responsivo

## 🎨 Secciones del Sitio

### 1. Navegador

- Barra de navegación con Bootstrap
- Enlaces con smooth scroll
- Responsiva en dispositivos móviles

### 2. Hero Section

- Imagen destacada
- Texto principal
- Botón de "Conoce más"

### 3. Servicios

- Tres tarjetas informativas
- Efecto hover interactivo
- Diseño de grid responsivo

### 4. Contacto

- Formulario integrado con **Formspree** (sin servidor)
- Validación de campos requeridos
- Envío seguro de emails
- Los mensajes se reciben en tu email

### 5. Footer

- Derechos de autor
- Información adicional

## 📱 Responsividad

El sitio es totalmente responsivo y se adapta a:

- 📱 Dispositivos móviles (320px+)
- 📱 Tablets (768px+)
- 💻 Escritorio (1024px+)

## 🛠 Tecnologías Utilizadas

- **HTML5** - Estructura del sitio
- **Bootstrap 5** - Framework CSS
- **CSS3** - Estilos personalizados
- **JavaScript** - Interactividad

## 📖 Cómo Usar

1. Abre el archivo `index.html` en tu navegador
2. Personaliza los textos, colores e imágenes según necesites
3. Modifica `css/style.css` para cambiar los estilos
4. Edita `js/script.js` para agregar funcionalidades

## 🎯 Customización

### Cambiar Colores

Edita las variables CSS en `css/style.css`:

```css
:root {
  --primary-color: #0d6efd;
  --secondary-color: #6c757d;
  /* ... */
}
```

### Agregar Secciones

Copia el patrón de las secciones existentes en `index.html`

---

## 📧 Configurar el Formulario de Contacto

### ⚠️ **IMPORTANTE: No subas tu token a GitHub**

El formulario usa **Formspree** (sin servidor necesario):

1. Ve a https://formspree.io
2. Regístrate y crea un formulario
3. Obtén tu token (ej: `xojpvwqw`)
4. En `index.html` línea 111, reemplaza:

   ```html
   <!-- ANTES -->
   <form action="https://formspree.io/f/TU_TOKEN_FORMSPREE" method="POST">
     <!-- DESPUÉS (con tu token real)-->
     <form action="https://formspree.io/f/xojpvwqw" method="POST"></form>
   </form>
   ```

**Nota**: Tu token es sensible. No lo subas a GitHub si el repo es público.
Ver [SEGURIDAD.md](SEGURIDAD.md) para más detalles.

---

## 🚀 Subir a GitHub (Sin Exponer el Token)

### Paso 1: Mantener el Placeholder en GitHub

En GitHub mantenemos `TU_TOKEN_FORMSPREE` en lugar del token real.

```bash
# Antes de subir, verifica que NO esté tu token real
grep "xojpvwqw" index.html  # No debe aparecer nada
```

### Paso 2: Instrucciones para Otros Desarrolladores

En el README (este archivo) dejamos instrucciones claras para que otros reemplacen el token.

### Paso 3: Archivos Protegidos

- `.env` → archivo ignorado (no se sube)
- `.env-example` → ejemplo visible (seguro)
- `.gitignore` → especifica qué no se sube

---

## 🔒 Seguridad

- ✅ Token de Formspree protegido con `.gitignore`
- ✅ Archivo `.env-example` como referencia
- ✅ Instrucciones claras en `SEGURIDAD.md`
- ✅ Sin datos sensibles en GitHub
