import { navbarEl, scrollUpBtnEl, scrollDownBtnEl } from "./COMMON.js";
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded and parsed");

  // Check if the elements are correctly imported
  console.log("navbarEl:", navbarEl);
  console.log("scrollUpBtnEl:", scrollUpBtnEl);
  console.log("scrollDownBtnEl:", scrollDownBtnEl);
  window.addEventListener("scroll", function () {
    const scrollTop = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    // Get the current scroll position
    if (scrollTop > 0) {
      navbarEl.classList.add("navbar--scroll");
    } else {
      navbarEl.classList.remove("navbar--scroll");
    }

    if (scrollTop > 0 && scrollTop + clientHeight < scrollHeight - 1) {
      scrollUpBtnEl.classList.add("show");
      scrollDownBtnEl.classList.add("show");
    } else {
      scrollUpBtnEl.classList.remove("show");
      scrollDownBtnEl.classList.remove("show");
    }
  });
});
