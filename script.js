function showNav() {
  const navLink = document.getElementById("navLink");
  navLink.className = "nav__link nav__link-opened";
  const navBtn = document.getElementById("navBtn");
  navBtn.className = "nav__button nav__button-hide";
}

function closeNav() {
  const navLink = document.getElementById("navLink");
  navLink.className = "nav__link";
  const navBtn = document.getElementById("navBtn");
  navBtn.className = "nav__button";
}