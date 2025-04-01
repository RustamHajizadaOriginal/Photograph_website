document.addEventListener("DOMContentLoaded", function () {
  // Mobile Menu
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

  // Custom smooth scroll function
  function smoothScrollTo(targetPosition, duration) {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const speed = distance / duration; // Calculate speed
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = startPosition + speed * timeElapsed;
      window.scrollTo(0, run);
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      } else {
        window.scrollTo(0, targetPosition); // Ensure it ends exactly at the target position
      }
    }

    requestAnimationFrame(animation);
  }

  // Scroll Buttons
  const scrollUpBtn = document.getElementById("scrollUpBtn");
  const scrollDownBtn = document.getElementById("scrollDownBtn");

  scrollUpBtn.style.display = "block";
  scrollDownBtn.style.display = "block";

  scrollUpBtn.addEventListener("click", function () {
    smoothScrollTo(0, 1000); // Adjust the duration (2000ms) as needed
  });

  scrollDownBtn.addEventListener("click", function () {
    smoothScrollTo(document.body.scrollHeight, 1000); // Adjust the duration (2000ms) as needed
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
    scrollUpBtn.classList.add("show");
    scrollDownBtn.classList.add("show");
  } else {
    scrollUpBtn.classList.remove("show");
    scrollDownBtn.classList.remove("show");
  }
});
