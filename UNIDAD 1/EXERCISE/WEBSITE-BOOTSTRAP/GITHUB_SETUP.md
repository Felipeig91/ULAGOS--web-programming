# 🐙 Guía para Subir a GitHub

## ✅ Antes de Subir

### 1. Verifica que tu token NO esté en los archivos

```bash
# En la terminal, desde la carpeta del proyecto
grep -r "xojpvwqw" .
grep -r "xozgwqdo" .
# Si aparece ALGO, cámbialo por TU_TOKEN_FORMSPREE
```

### 2. Verifica que `.gitignore` está bien configurado

```bash
cat .gitignore | grep ".env"
# Debe mostrar: .env
```

### 3. Verifica que `.env` NO exista

```bash
ls -la | grep .env
# No debe aparecer ".env"
```

---

## 🚀 Comandos para Subir

### 1. Inicializar Git (primera OCASIÓN vez)

```bash
cd /Users/firp-personal/Documents/PROGRAMACION/ULAGOS/WEBSITE-BOOTSTRAP

git init
git add .
git commit -m "Initial commit: Estructura Bootstrap con Formspree"
```

### 2. Agregar repositorio remoto

```bash
# Reemplaza URL con tu repositorio
git remote add origin https://github.com/Felipeig91/WEBSITE-BOOTSTRAP.git

# Verifica que se agregó
git remote -v
```

### 3. Subir al branch main

```bash
git branch -M main
git push -u origin main
```

---

## 📋 Checklist Antes de Push

- ✅ Token de Formspree reemplazado por `TU_TOKEN_FORMSPREE` en `index.html`
- ✅ `.gitignore` contiene `.env`
- ✅ No existe archivo `.env` localmente
- ✅ Archivos comentados:
  - ✅ `index.html` - comentarios en cada sección
  - ✅ `js/script.js` - documentación de funciones
  - ✅ `css/style.css` - explicación de variables
- ✅ Archivos de seguridad creados:
  - ✅ `.env-example` - plantilla de variables
  - ✅ `SEGURIDAD.md` - guía de protección
  - ✅ `.gitignore` - archivos ignorados

---

## 📝 Archivos Incluidos en GitHub

- ✅ `index.html` (con placeholder, sin token real)
- ✅ `css/style.css` (con comentarios)
- ✅ `js/script.js` (con documentación)
- ✅ `README.md` (instrucciones completas)
- ✅ `FORMSPREE_SETUP.md` (guía de contacto)
- ✅ `SEGURIDAD.md` (protección de claves)
- ✅ `.env-example` (plantilla de variables)
- ✅ `.gitignore` (archivos no subidos)
- ✅ `assets/` (carpeta de imágenes)

## ❌ Archivos NO Incluidos en GitHub

- ❌ `.env` (si existe, contiene datos sensibles)
- ❌ `node_modules/` (si usas Node.js)
- ❌ `.DS_Store` (archivos del sistema)

---

## 🔍 Verificar Tu Repositorio

Después de subir a GitHub, verifica:

1. Ve a tu repo en GitHub
2. Busca `index.html` y abre
3. Baja a la línea 111 (el formulario)
4. **DEBE decir**: `https://formspree.io/f/TU_TOKEN_FORMSPREE`
5. **NO debe decir**: `https://formspree.io/f/xojpvwqw` o código real

---

## 💡 Para Otros Desarrolladores

Si alguien clona tu repo:

```bash
# 1. Clona
git clone https://github.com/Felipeig91/WEBSITE-BOOTSTRAP.git

# 2. Lee las instrucciones
cat README.md
cat SEGURIDAD.md

# 3. Obtiene su propio token en https://formspree.io

# 4. Edita index.html línea 111 con su token

# 5. Prueba localmente
# Abre index.html en el navegador
```

---

## 🎯 Resumen

| Paso              | Estado | Descripción                           |
| ----------------- | ------ | ------------------------------------- |
| Comentarios       | ✅     | Todos los archivos tienen comentarios |
| Seguridad         | ✅     | Click oculto de Formspree             |
| .gitignore        | ✅     | Creado y configurado                  |
| .env-example      | ✅     | Plantilla disponible                  |
| README            | ✅     | Actualizado con instrucciones         |
| Listo para GitHub | ✅     | ¡YA PUEDES SUBIR!                     |

---

**Siguiente paso**: Ejecuta los comandos de "Comandos para Subir" ☝️
