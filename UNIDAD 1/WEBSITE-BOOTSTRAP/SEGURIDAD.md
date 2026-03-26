# 🔒 Guía de Seguridad - Formspree

Este documento explica cómo manejar de forma segura el token de Formspree sin exponerlo en GitHub.

## ⚠️ **Nunca subas claves a GitHub**

El archivo `index.html` tiene un placeholder: `TU_TOKEN_FORMSPREE`
Este token **NO** debe estar en el repositorio público.

## 🔐 Soluciones Seguras

### Opción 1: Variable de Entorno + Build Script (RECOMENDADO para producción)

Si tu sitio usa un build process (Node.js):

```bash
# 1. Instala dotenv
npm install dotenv

# 2. Crea .env (no se sube a GitHub)
FORMSPREE_TOKEN=tu_token_real
```

Luego en el build script, reemplaza el placeholder con el token real.

### Opción 2: Configuración Local (FÁCIL para desarrollo)

1. Abre `index.html` en tu editor
2. Busca `TU_TOKEN_FORMSPREE`
3. Reemplázalo con tu token real
4. El archvo está en `.gitignore` modificado, así que Git no lo subirá si lo modificas localmente

### Opción 3: Servidor Backend (MÁS SEGURO para producción)

Crea un servidor PHP/Node que maneje la solicitud:

- El servidor guarda el token (nunca se expone)
- El formulario envía a tu servidor
- Tu servidor reenvía a Formspree

## 🚀 Pasos para Configuración Segura

### Para Desarrollo Local:

```bash
# 1. Copia el archivo de ejemplo
cp .env-example .env

# 2. Edita .env con tu token real
# .env no se sube a GitHub (está en .gitignore)

# 3. Actualiza index.html línea 111:
# Antes:  <form action="https://formspree.io/f/TU_TOKEN_FORMSPREE"
# Después: <form action="https://formspree.io/f/xojpvwqw"
```

### Para GitHub Public (Recomendado):

Si tu proyecto es público:

1. Mantén el placeholder `TU_TOKEN_FORMSPREE` en GitHub
2. En tu `README.md` incluye instrucciones para que otros reemplacen el token
3. Nosotros incluimos `.env-example` como guía

## ✅ Verificación

Antes de hacer push a GitHub:

```bash
# Verifica que tu token NO esté en el archivo
grep -r "xojpvwqw" .  # Si aparece, cambiar el nombre

# Verifica que .env está en .gitignore
cat .gitignore | grep .env
```

## 📝 Instrucciones para Otros Desarrolladores

Si alguien clona tu sitio desde GitHub:

```markdown
### Configurar Formulario de Contacto

1. Obtén tu token en https://formspree.io
2. Edita `index.html` línea 111
3. Reemplaza `TU_TOKEN_FORMSPREE` con tu token
4. ¡Listo! El formulario funcionará
```

---

**Resumen**: 🔒 Token = Secreto ❌ GitHub = Público ✅
