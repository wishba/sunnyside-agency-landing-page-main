const MENU = document.getElementById('nav-menu')
const BUTTON = document.getElementById('nav-button')

BUTTON.addEventListener('click', () => {
  MENU.classList.toggle('opened')
})

window.addEventListener('click', (e) => {
  if (!MENU.contains(e.target) && !BUTTON.contains(e.target) && MENU.classList.contains('opened')) {
    MENU.classList.remove('opened')
  }
})