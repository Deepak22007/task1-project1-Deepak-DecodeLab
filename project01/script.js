// Select the menu toggle button and the navigation links container
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

// Add click event listener to toggle the 'active' class
menuToggle.addEventListener("click", function () {
  navLinks.classList.toggle("active");
});
