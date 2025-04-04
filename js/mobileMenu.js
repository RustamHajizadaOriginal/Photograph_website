// Mobile Menu
document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector(".navbar__mobile-menu-toggle");
  const mobileMenu = document.querySelector(".navbar__mobile-menu-items");
  const menuItems = document.querySelectorAll(".navbar__mobile-menu-items a");

  toggleButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
    if (mobileMenu.classList.contains("active")) {
      scrollUpBtn.style.display = "none";
      scrollDownBtn.style.display = "none";
    } else {
      scrollUpBtn.style.display = "block";
      scrollDownBtn.style.display = "block";
    }
  });
  menuItems.forEach(function (item) {
    item.addEventListener("click", function () {
      mobileMenu.classList.remove("active");
      scrollUpBtn.style.display = "block";
      scrollDownBtn.style.display = "block";
    });
  });
});
