// script.js
gsap.to("nav", {
    backgroundColor: "#fff",
    height: "80px",
    color:"black",
    duration: 0.5,
    scrollTrigger: {
      trigger: "nav",
      scroller: "body",
      start: "top -20%",
      end: "top -21%",
      scrub: 1,
    },
  });
  
  
  gsap.to("nav .left label, nav a , nav .plan-button", {
    color: "black",
    duration: 0.5,
    scrollTrigger: {
      trigger: "nav",
      scroller: "body",
      start: "top -20%",
      end: "top -21%",
      scrub: 1,
    },
  });
var currentImageIndex = 0;
var totalImages = document.querySelectorAll('.container').length;
var prevButton = document.getElementById('prevButton');
var nextButton = document.getElementById('nextButton');

prevButton.addEventListener('click', function() {
    changeImage('prev');
});

nextButton.addEventListener('click', function() {
    changeImage('next');
});

function changeImage(direction) {
    if (direction === 'prev') {
        currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
    } else if (direction === 'next') {
        currentImageIndex = (currentImageIndex + 1) % totalImages;
    }

    updateDisplayedImage();
}

function updateDisplayedImage() {
    var containers = document.querySelectorAll('.container');
    containers.forEach(function(container, index) {
        container.style.display = index === currentImageIndex ? 'block' : 'none';
    });
}


//Dropdown Destination
// script.js

document.addEventListener('DOMContentLoaded', function() {
    var dropdownContainer = document.querySelector('.dropdown-container');
    var destinationsDropdown = document.querySelector('.destinations');
  
    dropdownContainer.addEventListener('click', function() {
      destinationsDropdown.classList.toggle('show');
    });
  
    // Close the dropdown if the user clicks outside of it
    window.addEventListener('click', function(event) {
      if (!event.target.matches('.dropdown-container') && !event.target.closest('.dropdown-container')) {
        destinationsDropdown.classList.remove('show');
      }
    });
  });
  

