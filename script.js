var burgerIcon = document.querySelector(".burger");
var navLink = document.querySelector("ul");
burgerIcon.addEventListener("click", function () {
  navLink.classList.toggle("show");
});
