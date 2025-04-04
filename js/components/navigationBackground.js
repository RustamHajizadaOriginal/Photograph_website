import {} from "./COMMON.js";
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  const scrollUpBtn = document.getElementById("scrollUpBtn");
  const scrollDownBtn = document.getElementById("scrollDownBtn");

  const scrollTop = window.scrollY;
  const scrollHeight = document.documentElement.scrollHeight;
  const clientHeight = document.documentElement.clientHeight;

  if (scrollTop > 0) {
    navbar.classList.add("navbar--scroll");
  } else {
    navbar.classList.remove("navbar--scroll");
  }

  if (scrollTop > 0 && scrollTop + clientHeight < scrollHeight - 1) {
    scrollUpBtn.classList.add("show");
    scrollDownBtn.classList.add("show");
  } else {
    scrollUpBtn.classList.remove("show");
    scrollDownBtn.classList.remove("show");
  }
});
