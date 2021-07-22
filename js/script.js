const menuBtn = document.querySelector(".navbar__menu");
const menu = document.querySelector(".navbar__nav__list");
const menuToggleBtn = document.querySelector(".navbar__menu-burger");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  menuToggleBtn.classList.toggle("active");
});
