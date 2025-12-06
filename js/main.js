document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.js-menu-toggle');
    const navMenu = document.getElementById('main-nav');

    toggleButton.addEventListener('click', () => {
        const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true' || false;
        toggleButton.setAttribute('aria-expanded', !isExpanded);
        navMenu.classList.toggle('nav--is-open');
    });
});

(function() {
    const header = document.querySelector('.header');
    const nav = document.getElementById('main-nav');
    let lastScroll = window.scrollY || 0;
    let ticking = false;

    function onScroll() {
        const current = window.scrollY || 0;

        if (!ticking) {
            window.requestAnimationFrame(() => {
                // Si el nav está abierto, siempre mostrar header
                const navOpen = nav && nav.classList.contains('nav--is-open');
                if (navOpen) {
                header.classList.remove('header--hidden');
                } else if (current <= 0) {
                    header.classList.remove('header--hidden');
                } else if (current > lastScroll && current > 100) {
                    // Scrolling down
                    header.classList.add('header--hidden');
                } else if (current < lastScroll) {
                    // Scrolling up
                    header.classList.remove('header--hidden');
                }

                lastScroll = current;
                ticking = false;
            });
            ticking = true;
        }
    }

    window.addEventListener('scroll', onScroll, { passive: true });

    // Si el usuario cambia el tamaño o el navegador sitúa de nuevo al top
    window.addEventListener('resize', () => {
        if (window.scrollY <= 0) header.classList.remove('header--hidden');
    });
})();
