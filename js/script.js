const body =  document.querySelector('body'),
    navToggle = body.querySelector('.mobile-nav-toggle'),
    nav = body.querySelector('.header nav'),
    links = body.querySelector('.header__links'),
    overlay = body.querySelector('.overlay');

navToggle.addEventListener('click', () => {
    body.classList.toggle('overflow-hidden');

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
});