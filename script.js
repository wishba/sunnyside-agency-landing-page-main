const MENU_LIST = document.getElementById('menu-list');
const MENU_BUTTON = document.getElementById('menu-button');

MENU_BUTTON.addEventListener('click', () => {
  MENU_LIST.classList.toggle("nav__menu--opened");
})

window.addEventListener('click', (e) => {
  if (!MENU_LIST.contains(e.target) && !MENU_BUTTON.contains(e.target) && MENU_LIST.classList.contains('nav__menu--opened')) {
    MENU_LIST.classList.remove('nav__menu--opened');
  }
});
