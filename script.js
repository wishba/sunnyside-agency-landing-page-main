function showNav() {
  const navLink = document.getElementById("navLink");
  navLink.className = "nav__link nav__link-opened";
}

function closeNav() {
  const navLink = document.getElementById("navLink");
  navLink.className = "nav__link";
}