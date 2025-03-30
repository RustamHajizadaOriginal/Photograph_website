document.addEventListener("DOMContentLoaded", function () {
  // Mobile Menu
  const toggleButton = document.querySelector(".navbar__mobile-menu-toggle");
  const mobileMenu = document.querySelector(".navbar__mobile-menu-items");
  const menuItems = document.querySelectorAll(".navbar__mobile-menu-items a");

  toggleButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
  });
  menuItems.forEach(function (item) {
    item.addEventListener("click", function () {
      mobileMenu.classList.remove("active");
    });
  });

  // Scroll Buttons
  const scrollUpBtn = document.getElementById("scrollUpBtn");
  const scrollDownBtn = document.getElementById("scrollDownBtn");

  scrollUpBtn.style.display = "block";
  scrollDownBtn.style.display = "block";

  scrollUpBtn.addEventListener("click", function () {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  });

  scrollDownBtn.addEventListener("click", function () {
    document.body.scrollTop = document.body.scrollHeight; // For Safari
    document.documentElement.scrollTop = document.documentElement.scrollHeight; // For Chrome, Firefox, IE and Opera
  });
});

// Navigation Background on scroll
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
    scrollUpBtn.style.display = "block";
    scrollDownBtn.style.display = "block";
  } else {
    scrollUpBtn.style.display = "none";
    scrollDownBtn.style.display = "none";
  }
});
