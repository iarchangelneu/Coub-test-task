const menuBtn = document.querySelector('.header__menu_btn');
const menu = document.querySelector('.header__menu');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('header__menu_btn_open');
        menu.classList.add('header__menu_active');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('header__menu_btn_open');
        menu.classList.remove('header__menu_active');
        menuOpen = false;
    }
});