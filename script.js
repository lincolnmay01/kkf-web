/*links to social media*/
document.getElementById('emailButton').addEventListener('click', function() {
    window.location.href = 'mailto:kristinakf04@gmail.com';
  });

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active"); 
      navLinks.classList.toggle("active");
  });

  // Optional: Close the menu when a link is clicked
  document.querySelectorAll('.nav-links li').forEach(item => 
    item.addEventListener('click', () => {
      navLinks.classList.remove('active');
      hamburger.classList.remove('active');
    }));

    const dropdownButton = document.querySelector('.dropdown-button');
    const dropdownContent = document.querySelector('.dropdown-content');
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
});

window.onload = function() {
  // Reset the form fields when the page loads
  document.getElementById("contact-form").reset();
};
