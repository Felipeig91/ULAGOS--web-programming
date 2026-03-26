/**
 * =======================================
 * Scripts Personalizados
 * =======================================
 * 
 * Este archivo contiene funcionalidades interactivas:
 * - Smooth scroll: Desplazamiento suave entre secciones
 * - Navbar activa: Resalta el enlace según la sección visible
 * - Validación básica de formulario
 * 
 * Dependencias: Bootstrap 5
 */

// ===== INICIALIZACIÓN CUANDO EL DOM ESTÁ LISTO =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('✓ Sitio Bootstrap cargado correctamente');
    
    // ===== SMOOTH SCROLL =====
    // Permite desplazamiento suave al hacer click en enlaces internos (#)
    // Aplica a todos los enlaces que apuntan a IDs en la página
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Previene el salto instantáneo
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                // Desplazamiento suave con behavior: 'smooth'
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// ===== NAVBAR ACTIVA SEGÚN SCROLL =====
// Actualiza qué enlace del navbar está marcado como activo
// basándose en la sección visible en pantalla
function actualizarNavbar() {
    // Obtiene todas las secciones y enlaces del navbar
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    // Recorre cada sección para determinar cuál está visible
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100; // Offset para activar antes
        const sectionHeight = section.clientHeight;

        // Verifica si la sección actual está en el viewport
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            // Remueve clase 'active' de todos los enlaces
            navLinks.forEach(link => link.classList.remove('active'));
            
            // Agrega clase 'active' al enlace correspondiente
            const activeLink = document.querySelector(`.navbar-nav .nav-link[href="#${section.id}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
}

// Ejecuta la función al hacer scroll
window.addEventListener('scroll', actualizarNavbar);
