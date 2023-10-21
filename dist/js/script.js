const hamburger = document.querySelector('.promo__hamburger'),
    menu = document.querySelector('.menu'),
    close = document.querySelector('.menu__block_close'),
    closeOverlay = document.querySelector('.menu__overlay');

function openMenu() {
    menu.classList.add('menu_active');
    hamburger.classList.remove('promo__hamburger');
}
function closeMenu() {
    menu.classList.remove('menu_active');
    hamburger.classList.add('promo__hamburger');
}
hamburger.addEventListener('click', openMenu);
close.addEventListener('click', closeMenu);
closeOverlay.addEventListener('click', closeMenu);
