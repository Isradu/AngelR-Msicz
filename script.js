// script.js

document.addEventListener('DOMContentLoaded', () => {

    // --- Manejo del Pop-up ---
    const popupOverlay = document.getElementById('popup-overlay');
    const closePopupButton = document.getElementById('close-popup');
    const popupCtaButton = document.getElementById('popup-cta'); // Botón dentro del popup

    // Función para mostrar el pop-up
    function showPopup() {
        // Comprobar si el popup ya se cerró en esta sesión
        if (!sessionStorage.getItem('popupClosed')) {
            // Añadir un pequeño retraso antes de mostrar para asegurar que la página esté lista
            setTimeout(() => {
                if (popupOverlay) {
                    popupOverlay.classList.add('active');
                    // Opcional: Deshabilitar scroll del body mientras el popup está activo
                    // document.body.style.overflow = 'hidden';
                }
            }, 500); // Retraso de 500ms
        }
    }

    // Función para cerrar el pop-up
    function closePopup() {
        if (popupOverlay) {
            popupOverlay.classList.remove('active');
            // Guardar en sessionStorage para no mostrar de nuevo en la misma sesión
            sessionStorage.setItem('popupClosed', 'true');
            // Opcional: Habilitar scroll del body de nuevo
            // document.body.style.overflow = '';
        }
    }

    // Mostrar el pop-up al cargar la página (con un retraso mayor)
    // Usamos 'load' para asegurar que todo (imágenes, etc.) esté cargado
    window.addEventListener('load', () => {
         setTimeout(showPopup, 1500); // Espera 1.5 segundos después de cargar todo
    });


    // Event listeners para cerrar el pop-up
    if (closePopupButton) {
        closePopupButton.addEventListener('click', closePopup);
    }

    if (popupOverlay) {
        // Cerrar al hacer clic fuera del contenido del pop-up (en el overlay)
        popupOverlay.addEventListener('click', (event) => {
            if (event.target === popupOverlay) {
                closePopup();
            }
        });
    }

    if (popupCtaButton) {
         // Cerrar también al hacer clic en el botón CTA del popup
         popupCtaButton.addEventListener('click', () => {
             closePopup();
             // No es necesario hacer scroll manualmente, el href="#contacto" lo maneja
         });
    }

    // --- Efecto de Scroll en el Header ---
    const header = document.getElementById('header');

    window.addEventListener('scroll', () => {
        if (header) {
            // Añadir clase 'scrolled' si el scroll es mayor que una pequeña cantidad (ej. 10px)
            if (window.scrollY > 10) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    });

    // --- Manejo del Menú Móvil ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const navLinks = document.querySelector('.nav-links');
    const navLinkItems = document.querySelectorAll('.nav-link');

    // Función para alternar la visibilidad del menú móvil
    function toggleMobileMenu() {
        navLinks.classList.toggle('active');
        console.log("Menú móvil clickeado, estado de navLinks:", navLinks.classList.contains('active'));
    }

    // Añadir evento de clic al botón del menú
    if (mobileMenuButton && navLinks) {
        mobileMenuButton.addEventListener('click', toggleMobileMenu);
    }

    // Añadir eventos de clic a cada enlace para cerrar el menú al navegar
    if (navLinkItems) {
        navLinkItems.forEach(link => {
            link.addEventListener('click', () => {
                // Solo cerrar si estamos en vista móvil (comprobando si el botón está visible)
                if (window.getComputedStyle(mobileMenuButton).display !== 'none') {
                    navLinks.classList.remove('active');
                }
            });
        });
    }

}); // Fin de DOMContentLoaded

