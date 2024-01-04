const menuToggle = document.querySelector(".kesatuan-hamburger-menu input");
const nav = document.querySelector(".ul-navbar");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});
