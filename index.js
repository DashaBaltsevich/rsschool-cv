'use strict';
const btn = document.querySelector('.menu-icon-wrapper'),
    menuIcon = document.querySelector('.menu-icon'),
    menuNav = document.querySelector('.mobile-nav'),
    links = document.querySelectorAll('.mobile-nav__link'),
    toLinks = document.querySelectorAll('.charg');

    btn.addEventListener('click', () => {
        menuIcon.classList.toggle('menu-icon-active');
        menuNav.classList.toggle('mobile-nav--active');
        if(menuNav.classList.contains('mobile-nav--active') === false) {
            btn.style.background = "#fff";
        }
    });

    //плавный скролл по якорям
function scrollFunc (link, tolink) {
    link.addEventListener('click', (eo) => {
        event.preventDefault();
        menuIcon.classList.toggle('menu-icon-active');
        menuNav.classList.toggle('mobile-nav--active');
        tolink.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}
for (let i =0; i< links.length; i++) {
    scrollFunc(links[i], toLinks[i]);
}



