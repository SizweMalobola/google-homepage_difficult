var navbar = document.querySelector("nav");

window.addEventListener("scroll", function (e) {
  if (window.pageYOffset >= 110) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});
