// Script for navigation sidebar toggling
const mobileMenu = document.getElementById('mobile-menu');
const headerList = document.querySelector('.header-list');
const body = document.body;

// Toggle menu when hamburger icon is clicked
mobileMenu.addEventListener('click', () => {
  headerList.classList.toggle('active');
  body.classList.toggle('menu-active');
});

// Close menu when a menu item is clicked
const navLinks = document.querySelectorAll('.header-list-nav ul li a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    headerList.classList.remove('active');
    body.classList.remove('menu-active');
  });
});

// Close menu when clicking outside the menu
document.addEventListener('click', (event) => {
  if (!event.target.closest('.header-list') && 
      !event.target.closest('.hamburger-menu')) {
    headerList.classList.remove('active');
    body.classList.remove('menu-active');
  }
});