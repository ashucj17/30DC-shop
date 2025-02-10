// focus the cursor on the email-address input
const emailField = document.getElementById("email-address-input");
emailField.focus({
  preventScroll: true,
});


// Add this to your script.js file

document.addEventListener('DOMContentLoaded', function() {
  const mobileMenu = document.getElementById('mobile-menu');
  const headerList = document.querySelector('.header-list');
  
  mobileMenu.addEventListener('click', function() {
      headerList.classList.toggle('active');
      
      // Toggle hamburger icon between bars and X
      const icon = this.querySelector('i');
      if (icon.classList.contains('fa-bars')) {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-xmark');
      } else {
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
      }
  });

  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
      if (!headerList.contains(event.target) && !mobileMenu.contains(event.target)) {
          headerList.classList.remove('active');
          const icon = mobileMenu.querySelector('i');
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
      }
  });

  // Close menu when clicking a link
  const navLinks = document.querySelectorAll('.header-list-nav ul li a');
  navLinks.forEach(link => {
      link.addEventListener('click', function() {
          headerList.classList.remove('active');
          const icon = mobileMenu.querySelector('i');
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
      });
  });
});