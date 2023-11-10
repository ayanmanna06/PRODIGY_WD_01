// Get the navbar element
const navbar = document.getElementById("navbar");

// Get the menu element
const menu = document.querySelector(".menu");

// Get the hamburger element
const hamburger = document.querySelector(".hamburger");

// Function to toggle the menu
function toggleMenu() {
  menu.classList.toggle("active");
  hamburger.classList.toggle("active");
}

// Function to change the navbar style on scroll
function changeNavbar() {
  // Get the current scroll position
  let scrollPos = window.scrollY;

  // If the scroll position is more than 0, add the scroll class to the navbar
  if (scrollPos > 0) {
    navbar.classList.add("scroll");
  } else {
    // Otherwise, remove the scroll class from the navbar
    navbar.classList.remove("scroll");
  }
}

// Add an event listener for the scroll event
window.addEventListener("scroll", changeNavbar);

// Get the service images
const serviceImages = document.querySelectorAll(".card img");

// Get the service paragraphs
const serviceParagraphs = document.querySelectorAll(".card p");

// Get the service buttons
const serviceButtons = document.querySelectorAll(".card .btn");

// Function to toggle the service details
function toggleServiceDetails(e) {
  // Get the index of the clicked image
  let index = Array.from(serviceImages).indexOf(e.target);

  // Toggle the display of the corresponding paragraph and button
  serviceParagraphs[index].classList.toggle("show");
  serviceButtons[index].classList.toggle("show");
}

// Loop through the service images and add an event listener for the click event
serviceImages.forEach((image) => {
  image.addEventListener("click", toggleServiceDetails);
});
