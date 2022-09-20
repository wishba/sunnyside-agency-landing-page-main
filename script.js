function showNav() {
  const navLink = document.getElementById("navLink");
  if (navLink.className == "nav__link") {
    navLink.className = "nav__link nav__link-opened";
  } else if (navLink.className == "nav__link nav__link-opened") {
    navLink.className = "nav__link";
  }
}