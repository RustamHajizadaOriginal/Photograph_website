document.addEventListener("DOMContentLoaded", function () {
  const dominikaLogo = document.querySelector(".dominikaLogo");
  dominikaLogo.style.display = "none"; // Hide initially

  window.addEventListener("scroll", function () {
    const scrollTop = window.scrollY;
    if (scrollTop > 0) {
      dominikaLogo.style.display = "block"; // Show when scrolling
    } else {
      dominikaLogo.style.display = "none"; // Hide when not scrolling
    }
  });
});
