import { toggleButtonEl, mobileMenuEl, menuItemsEl } from "./COMMON.js";
// Mobile Menu
document.addEventListener("DOMContentLoaded", function () {
  toggleButtonEl.addEventListener("click", function () {
    mobileMenuEl.classList.toggle("active");
    if (mobileMenuEl.classList.contains("active")) {
      scrollUpBtn.style.display = "none";
      scrollDownBtn.style.display = "none";
    } else {
      scrollUpBtn.style.display = "block";
      scrollDownBtn.style.display = "block";
    }
  });
  menuItemsEl.forEach(function (item) {
    item.addEventListener("click", function () {
      mobileMenuEl.classList.remove("active");
      scrollUpBtn.style.display = "block";
      scrollDownBtn.style.display = "block";
    });
  });
});
