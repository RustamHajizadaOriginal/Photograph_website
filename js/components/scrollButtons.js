import {} from "./COMMON.js";
// Scroll Buttons
import { smoothScrollTo } from "./smoothScroll.js";
document.addEventListener("DOMContentLoaded", function () {
  const scrollUpBtn = document.getElementById("scrollUpBtn");
  const scrollDownBtn = document.getElementById("scrollDownBtn");

  scrollUpBtn.style.display = "block";
  scrollDownBtn.style.display = "block";

  scrollUpBtn.addEventListener("click", function () {
    smoothScrollTo(0, 1000); // Adjust the duration (1000ms) as needed
  });

  scrollDownBtn.addEventListener("click", function () {
    smoothScrollTo(document.body.scrollHeight, 1000); // Adjust the duration (2000ms) as needed
  });
});
