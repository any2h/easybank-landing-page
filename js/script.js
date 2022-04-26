const navToggle = document.querySelector('.mobile-nav-toggle'),
    nav = document.querySelector('.header nav'),
    links = document.querySelector('.header-links'),
    overlay = document.querySelector('.overlay');

navToggle.addEventListener('click', () => {
    // navToggle.classList.toggle('open');

    if (navToggle.classList.contains('open')) {
        navToggle.classList.remove('open');
        nav.classList.remove('open');
        // links.classList.remove('nav-open');
        overlay.classList.remove('fade-in');
        overlay.classList.add('fade-out');
    } else {
        navToggle.classList.add('open');
        // links.classList.add('nav-open');
        nav.classList.add('open');
        overlay.classList.remove('fade-out');
        overlay.classList.add('fade-in');
    }
});