document.addEventListener('DOMContentLoaded', function
    () {
    // Mobile Menu
    const toggleButton = document.querySelector('.navbar__mobile-menu-toggle');
    const mobileMenu = document.querySelector('.navbar__mobile-menu-items');
    const menuItems = document.querySelectorAll('.navbar__mobile-menu-items a');
        
    toggleButton.addEventListener('click', function () {
        mobileMenu.classList.toggle('active');
    });
    menuItems.forEach(function (item) {
        item.addEventListener('click', function () {
            mobileMenu.classList.remove('active')
        });
    });
});
// Navigation Background on scroll
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
   
   
        if (window.scrollY > 0) {
            navbar.classList.add('navbar--scroll');
        } else {
            navbar.classList.remove('navbar--scroll');
        }
    
});

// Validaiton of the form requests.
function validateForm() {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    if (!name.validity.valid) {
      name.setCustomValidity('Prosím, zadejte Vaše jméno.');
    } else {
      name.setCustomValidity('');
    }

    if (!email.validity.valid) {
      email.setCustomValidity('Prosím, zadejte platnou e-mailovou adresu.');
    } else {
      email.setCustomValidity('');
    }

    if (!message.validity.valid) {
      message.setCustomValidity('Prosím, zadejte Vaši zprávu.');
    } else {
      message.setCustomValidity('');
    }

    return name.validity.valid && email.validity.valid && message.validity.valid;
  }

// Temporarily disabling all links that open in a new tab
    //   document.addEventListener("DOMContentLoaded", function() {
//     const links = document.querySelectorAll('a[target="_blank"]');
//     links.forEach(link => {
//       link.setAttribute('data-original-target', '_blank');
//       link.removeAttribute('target');
//     });
    //   });
