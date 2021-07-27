const menuBtn = document.querySelector(".navbar__menu");
const menu = document.querySelector(".navbar__nav__list");
const menuToggleBtn = document.querySelector(".navbar__menu-burger");

//Toggle navigation.i
menuBtn.addEventListener("click", function () {
  menu.classList.toggle("active");
  menuToggleBtn.classList.toggle("active");

  //accessibility
  if (menu.classList.contains("active")) {
    menuBtn.setAttribute("aria-expanded", "true");
    menuBtn.setAttribute("aria-label", "close menu");
  } else {
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.setAttribute("aria-label", "show menu");
  }
});

//All-links
const links = [...menu.querySelectorAll(".navbar__nav__link")];
//when reached last item in a list
//Add blur to move back focus to toggle button;
const lastChild = links.pop();
lastChild.addEventListener("blur", () => {
  menuBtn.focus();
});

//Email validation
const errorPlaceholder = document.querySelector(".error");
const form = document.querySelector(".cta__form");

//Error msg to be displayed on wrong email"Please enter a valid email")
const error = (msg = "Please enter a valid email") => {
  return (errorPlaceholder.textContent = msg);
};

//setError message
const setError = (msg) => {
  return error(msg);
};

//validate email
const validateEmail = (email) => {
  const validReg =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return email.match(validReg) ? true : false;
};

//submit form
form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const email = evt.target.children[0].value;
  validateEmail(email) ? setError("") : error();
});
