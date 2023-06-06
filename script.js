const MENU = document.getElementById('nav-menu');
const BUTTON = document.getElementById('nav-button');

BUTTON.addEventListener('click', () => {
  MENU.classList.toggle("nav__menu--opened");
})

window.addEventListener('click', (e) => {
  if (!MENU.contains(e.target) && !BUTTON.contains(e.target) && MENU.classList.contains('nav__menu--opened')) {
    MENU.classList.remove('nav__menu--opened');
  }
});
