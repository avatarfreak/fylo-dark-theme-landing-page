const menuBtn = document.querySelector(".navbar__menu");
const menu = document.querySelector(".navbar__nav__list");
const menuToggleBtn = document.querySelector(".navbar__menu-burger");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  menuToggleBtn.classList.toggle("active");
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

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const email = evt.target.children[0].value;
  validateEmail(email) ? setError("") : error();
});
