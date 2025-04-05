import { dominikaLogoEl } from "./COMMON.js";
document.addEventListener("DOMContentLoaded", function () {
  dominikaLogoEl.style.display = "none"; // Hide initially

  window.addEventListener("scroll", function () {
    const scrollTop = window.scrollY;
    if (scrollTop > 0) {
      dominikaLogoEl.style.display = "block"; // Show when scrolling
    } else {
      dominikaLogoEl.style.display = "none"; // Hide when not scrolling
    }
  });
});
