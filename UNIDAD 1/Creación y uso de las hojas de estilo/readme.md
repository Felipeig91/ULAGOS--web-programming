Sigla Asignatura PGY3121 Nombre de la
Asignatura Desarrollo web Tiempo 3 horas
Experiencia de Aprendizaje N° 1 Diseño y construcción de páginas web
Actividad N° 1.3 Creación y uso de las hojas de estilo
Nombre del Recurso Didáctico 1.3.4 Actividad Formativa Creación y uso de las hojas de estilo

1. Descripción general actividad
1. Esta actividad tiene carácter formativo, es decir: es para visualizar lo que aprendes, en la directa medida que tú docente de asignatura te va retroalimentando constantemente, tanto a nivel individual como colectivo (equipo de trabajo).
1. Deberán conformar los Equipos de trabajo para esta primera actividad de aprendizaje.
1. Además, deberán organizar los Equipos estableciendo un o una Líder que será el encargado de las tareas a realizar con el repositorio
   Se sugiere realizar actividades formativas durante las sesiones en las cuales se explican los conceptos e ir avanzado de manera paulatina en conjunto con los estudiantes para que lleven a la práctica todos los conceptos visto en el primer módulo de la sesión.
   Contexto del problema:
   o Basados en el caso desarrollado “Ayuda a un peludo” como grupo deberán trabajar en el diseño gráfico de la página usando CSS3
   o La imagen del diseño es la siguiente:
   Para realizar la actividad, debes contemplar las siguientes actividades.
1. Utilizando Visual Studio Code o alguna otra IDE de su preferencia, deberán crear la base de la página HTML. 2. Recuerden utilizar el versionamiento creado en la clase anterior
1. Deberán crear la hoja de estilos vacía y asociarla al documento HTML.
1. Deberán ir creando y probando cada una de las reglas de estilo para completar el requerimiento.
1. Alguno de los requerimientos:
   a. La página web tiene una fuente del tipo sans-serif
   b. Al pasar el ratón sobre las opciones del menú, este debe cambiar levemente su tono.
   c. El menú tiene dos partes que se diferencian entre si por el color de los elementos.
   d. El área del menú deberá ser un 20% del total del tamaño de la página.
   e. El 80% restante deberá contener los cuadros de colores.
   f. Cada cuadro de color deberá tener una altura de 25% del total de la página.
1. Una vez que finalicen el trabajo, deberán sincronizar todo al repositorio.

## Implementación realizada

Se ha creado el proyecto web "Ayuda a un peludo" cumpliendo con los requisitos especificados en la actividad formativa. Los archivos generados son:

### Archivos creados:

- `index.html`: Estructura base de la página web en HTML5.
- `style.css`: Hoja de estilos CSS3 que implementa el diseño gráfico.

### Estructura de la página:

- **Menú lateral**: Ocupa el 20% del ancho de la página, dividido en dos secciones con colores diferenciados (azul claro y verde claro).
- **Área principal**: Ocupa el 80% restante, conteniendo 4 cajas de colores (rojo, azul, verde y amarillo), cada una con altura del 25% de la página.

### Estilos aplicados:

- Fuente sans-serif para toda la página.
- Efecto hover en los elementos del menú: cambio sutil de tono al pasar el ratón.
- Layout responsivo utilizando Flexbox para la distribución de elementos.
- Colores diferenciados en las dos partes del menú y en las cajas de colores.

### Validación:

- La página se ha abierto en el navegador y no presenta errores de sintaxis.
- Los estilos cumplen con todos los requerimientos especificados (a-f).

Para visualizar la página, abrir `index.html` en un navegador web.

## Sincronización con el repositorio

El proyecto ha sido subido al repositorio de Git siguiendo los siguientes pasos:

1. **Agregar archivos al staging**: `git add "Creación y uso de las hojas de estilo/"`
2. **Commit de los cambios**: `git commit -m "Add project: HTML and CSS implementation for activity 1.3"`
   - Se agregaron 3 archivos nuevos: `index.html`, `readme.md`, `style.css`
   - Total: 156 líneas insertadas
3. **Push al repositorio remoto**: `git push origin main`
   - Los cambios se subieron exitosamente a la rama `main` del repositorio `Felipeig91/ULAGOS--web-programming` en GitHub

El proyecto está ahora disponible en el repositorio remoto para revisión y colaboración.
