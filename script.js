document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger-menu');
  const navList = document.querySelector('.header-list');
  
  // Add close icon to the menu if it doesn't exist
  if (!document.querySelector('.close-icon')) {
    const closeIcon = document.createElement('div');
    closeIcon.className = 'close-icon';
    closeIcon.innerHTML = '✕';
    navList.prepend(closeIcon);
    
    // Add event listener to close icon
    closeIcon.addEventListener('click', function() {
      navList.classList.remove('active');
    });
  }
  
  // Add event listener to hamburger menu
  hamburger.addEventListener('click', function() {
    navList.classList.add('active');
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    if (!navList.contains(event.target) && 
        !hamburger.contains(event.target) && 
        navList.classList.contains('active')) {
      navList.classList.remove('active');
    }
  });
});