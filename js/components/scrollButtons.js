import { scrollUpBtnEl, scrollDownBtnEl } from "./COMMON.js";
// Scroll Buttons
import { smoothScrollTo } from "./smoothScroll.js";
document.addEventListener("DOMContentLoaded", function () {
  scrollUpBtnEl.style.display = "block";
  scrollDownBtnEl.style.display = "block";

  scrollUpBtnEl.addEventListener("click", function () {
    smoothScrollTo(0, 1000); // Adjust the duration (1000ms) as needed
  });

  scrollDownBtnEl.addEventListener("click", function () {
    smoothScrollTo(document.body.scrollHeight, 1000); // Adjust the duration (2000ms) as needed
  });
});
