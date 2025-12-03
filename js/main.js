/**
 * Main.js
 * Funcionalidades interactivas: navbar con dropdowns, menú móvil y cambio de tema
 */

document.addEventListener('DOMContentLoaded', () => {
    // ============================================================
    // NAVBAR - HAMBURGUESA Y DROPDOWNS
    // ============================================================

    const navbarToggle = document.querySelector('.navbar__toggle');
    const navbarMenu = document.querySelector('.navbar__menu');
    const navbarOverlay = document.querySelector('.navbar__overlay');
    const dropdownButtons = document.querySelectorAll('.navbar__link--dropdown');
    const navbarLinks = document.querySelectorAll('.navbar__sublink');
    const themeBtn = document.querySelector('.navbar__theme-btn');

    // Función para cerrar todos los dropdowns
    function closeAllDropdowns() {
        document.querySelectorAll('.navbar__submenu').forEach(menu => {
            menu.classList.remove('active');
        });
        document.querySelectorAll('.navbar__link--dropdown').forEach(btn => {
            btn.setAttribute('aria-expanded', 'false');
        });
    }

    // Función para cerrar el menú móvil
    function closeNavbarMenu() {
        navbarToggle.setAttribute('aria-expanded', 'false');
        navbarMenu.classList.remove('active');
        navbarOverlay.classList.remove('active');
        closeAllDropdowns();
    }

    // Abrir/cerrar menú móvil
    navbarToggle.addEventListener('click', () => {
        const isExpanded = navbarToggle.getAttribute('aria-expanded') === 'true';
        navbarToggle.setAttribute('aria-expanded', !isExpanded);
        navbarMenu.classList.toggle('active');
        navbarOverlay.classList.toggle('active');
    });

    // Cerrar menú al hacer clic en overlay
    navbarOverlay.addEventListener('click', closeNavbarMenu);

    // Manejar dropdowns
    dropdownButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            
            const submenu = button.nextElementSibling;
            const isExpanded = button.getAttribute('aria-expanded') === 'true';
            
            // Cerrar otros dropdowns
            closeAllDropdowns();
            
            // Abrir este dropdown si no estaba abierto
            if (!isExpanded) {
                button.setAttribute('aria-expanded', 'true');
                submenu.classList.add('active');
            }
        });
    });

    // Cerrar menú al hacer clic en un link
    navbarLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeNavbarMenu();
        });
    });

    // Cerrar menú con ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeNavbarMenu();
        }
    });

    // ============================================================
    // CAMBIO DE TEMA (Dark/Light)
    // ============================================================

    // Detectar tema preferido del sistema
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    const savedTheme = localStorage.getItem('theme');

    // Función para cambiar tema
    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        updateThemeButton(theme);
    }

    // Función para actualizar icono del botón de tema
    function updateThemeButton(theme) {
        const svg = themeBtn.querySelector('svg');
        if (theme === 'dark') {
            // Icono de luna (tema oscuro activo)
            svg.innerHTML = `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>`;
        } else {
            // Icono de sol (tema claro activo)
            svg.innerHTML = `<circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>`;
        }
    }

    // Establecer tema inicial
    if (savedTheme) {
        setTheme(savedTheme);
    } else if (prefersDark.matches) {
        setTheme('dark');
    } else {
        setTheme('light');
    }

    // Cambiar tema al hacer clic
    themeBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    });

    // Escuchar cambios de preferencia del sistema
    prefersDark.addEventListener('change', (e) => {
        if (!savedTheme) {
            setTheme(e.matches ? 'dark' : 'light');
        }
    });

    // ============================================================
    // VALIDACIÓN DE FORMULARIO (Feedback visual)
    // ============================================================

    const form = document.querySelector('.form');
    if (form) {
        const inputs = form.querySelectorAll('input[required], select[required]');
        
        inputs.forEach(input => {
            input.addEventListener('blur', () => {
                if (input.value === '') {
                    input.removeAttribute('data-valid');
                } else {
                    input.setAttribute('data-valid', 'true');
                }
            });

            input.addEventListener('input', () => {
                if (input.checkValidity()) {
                    input.setAttribute('data-valid', 'true');
                } else {
                    input.removeAttribute('data-valid');
                }
            });
        });

        // Prevenir envío del formulario para evitar recarga
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Mensaje de éxito
            const submitBtn = form.querySelector('.form__submit');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = '✓ Enviado correctamente';
            submitBtn.style.backgroundColor = 'var(--accent-color)';
            
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.style.backgroundColor = '';
                form.reset();
                inputs.forEach(input => input.removeAttribute('data-valid'));
            }, 2000);
        });
    }

    // ============================================================
    // NAVEGACIÓN ACTIVA EN NAVBAR
    // ============================================================

    // Observar qué sección está visible en el viewport
    const sections = document.querySelectorAll('[id^="intro"], [id^="tipografia"], [id^="colores"], [id^="grid"], [id^="flexbox"], [id^="media"], [id^="tabla"], [id^="accesibilidad"], [id^="formulario"], [id^="resumen"]');
    
    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -20% 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                
                // Actualizar links activos
                navbarLinks.forEach(link => {
                    link.classList.remove('navbar__sublink--active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('navbar__sublink--active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));

    // ============================================================
    // BOTÓN IR ARRIBA CON PROGRESO CIRCULAR
    // ============================================================

    const scrollToTopBtn = document.querySelector('.scroll-to-top');
    const progressRing = document.querySelector('.progress-ring__progress');
    const circumference = 113.1; // 2 * π * 18

    // Mostrar/ocultar botón según scroll
    window.addEventListener('scroll', () => {
        const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        
        // Mostrar botón si se ha scrolleado más del 20%
        if (scrollPercentage > 20) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }

        // Actualizar progreso circular
        const offset = circumference - (scrollPercentage / 100) * circumference;
        progressRing.style.strokeDashoffset = offset;
    });

    // Hacer scroll al top al hacer clic
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
