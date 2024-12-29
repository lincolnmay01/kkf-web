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
});

window.onload = function() {
  // Reset the form fields when the page loads
  document.getElementById("contact-form").reset();
};
