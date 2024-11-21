document.addEventListener('DOMContentLoaded', function () {
    // Get all the navigation links
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  
    // Get the current page URL
    const currentUrl = window.location.pathname;
  
    // Loop through all nav links and add 'active' class to the link matching the current URL
    navLinks.forEach(link => {
      // Check if the href attribute matches the current URL
      if (link.getAttribute('href') === currentUrl) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  });
  