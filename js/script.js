const navToggle = document.querySelector('.mobile-nav-toggle'),
    nav = document.querySelector('.header nav'),
    links = document.querySelector('.header-links'),
    overlay = document.querySelector('.overlay');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('overflow-hidden');

    if (nav.classList.contains('open')) {
        nav.classList.remove('open');

        links.classList.remove('fade-in');
        links.classList.add('fade-out');

        overlay.classList.remove('fade-in');
        overlay.classList.add('fade-out');
    } else {
        nav.classList.add('open');

        links.classList.remove('fade-out');
        links.classList.add('fade-in');

        overlay.classList.remove('fade-out');
        overlay.classList.add('fade-in');
    }

    // if (navToggle.classList.contains('open')) {
    //     navToggle.classList.remove('open');
    //     nav.classList.remove('open');

    //     links.classList.remove('fade-in');
    //     links.classList.add('fade-out');

    //     overlay.classList.remove('fade-in');
    //     overlay.classList.add('fade-out');
    // } else {
    //     navToggle.classList.add('open');
    //     nav.classList.add('open');

    //     links.classList.remove('fade-out');
    //     links.classList.add('fade-in');

    //     overlay.classList.remove('fade-out');
    //     overlay.classList.add('fade-in');
    // }
});