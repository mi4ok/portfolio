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

const counters = document.querySelectorAll('.counter'),
    lines = document.querySelectorAll('.skills__linear span');

counters.forEach( (item, i) => {
    // Преобразуем значение в число
    const counterValue = parseFloat(item.innerHTML);
    if (counterValue > 100) {
        item.innerHTML = "100%";
    }
    lines[i].style.width = item.innerHTML;
});

wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animate__animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  }
  )
  wow.init();