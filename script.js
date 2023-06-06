const MENU = document.getElementById('nav-menu')
const BUTTON = document.getElementById('nav-button')

BUTTON.addEventListener('click', () => {
  MENU.classList.toggle('nav__menu--opened')
})

window.addEventListener('click', (e) => {
  if (!MENU.contains(e.target) && !BUTTON.contains(e.target) && MENU.classList.contains('nav__menu--opened')) {
    MENU.classList.remove('nav__menu--opened')
  }
})

const OBSERVER = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible')
    }
  })
})

const HIDDEN = document.querySelectorAll('.hidden')
HIDDEN.forEach((el) => OBSERVER.observe(el))

const OBSERVER_TOP = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible--top')
    }
  })
})

const HIDDEN_TOP = document.querySelectorAll('.hidden--top')
HIDDEN.forEach((el) => OBSERVER_TOP.observe(el))