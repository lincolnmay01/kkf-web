
/*links to social media*/
document.addEventListener("DOMContentLoaded", () => {
  // Reset the form fields when the page loads
  

  // Email button functionality
  const emailButton = document.getElementById('emailButton');
  if (emailButton) {
    emailButton.addEventListener('click', function() {
      window.location.href = 'mailto:kristinakf04@gmail.com';
    });
  }

  // Hamburger menu functionality
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  
  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navLinks.classList.toggle("active");
    });

    // Optional: Close the menu when a link is clicked
    document.querySelectorAll('.nav-links li').forEach(item => 
      item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
      })
    );
  }

  // Dropdown functionality
  const dropdownButton = document.querySelector('.dropdown-button');
  const dropdownContent = document.querySelector('.dropdown-content');
  
  if (dropdownButton && dropdownContent) {
    let isDropdownOpen = false;

    // Function to toggle dropdown
    function toggleDropdown(event) {
      event.preventDefault();
      event.stopPropagation();
      
      isDropdownOpen = !isDropdownOpen;
      dropdownContent.style.display = isDropdownOpen ? 'block' : 'none';
    }

    // Handle touch events on the dropdown button
    dropdownButton.addEventListener('touchstart', toggleDropdown);

    // Close dropdown when touching anywhere else on the page
    document.addEventListener('touchstart', function(event) {
      if (!event.target.closest('.gallery-dropdown')) {
        dropdownContent.style.display = 'none';
        isDropdownOpen = false;
      }
    });
  }

  // Gallery links functionality
  const currentLocation = location.pathname.split('/').pop();
  const galleryLinks = document.querySelectorAll('.gallery-links a');
  
  galleryLinks.forEach(link => {
    if(link.getAttribute('href') === currentLocation) {
      link.classList.add('current');
    }
  });

  // Sweden title functionality
  const swedenTitle = document.querySelector('.gallery-links a'); // Add appropriate class selector
  if (swedenTitle && (currentLocation === 'index.html' || currentLocation === '')) {
    swedenTitle.classList.add('current');
  }

  /*links to social media*/
window.onload = function() {
  // Reset the form fields when the page loads
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.reset();
  }
};
});