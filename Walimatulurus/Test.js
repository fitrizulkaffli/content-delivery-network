document.addEventListener("DOMContentLoaded", function() {
  // Select all matching elements
  var elements = document.querySelectorAll('.premium-mobile-menu__item.elementor-repeater-item-3e1d4c1');
  
  // Loop through each element and add the onclick event
  elements.forEach(function(element) {
    element.onclick = function() {
      showLocationPopup();
    };
  });

  // Show the popup
  function showLocationPopup() {
    document.getElementById('locationPopup').style.display = 'block';
  }

  // Close the popup
  function closePopup() {
    document.getElementById('locationPopup').style.display = 'none';
  }

  // Optional: Close the popup if the overlay is clicked
  document.querySelector('.popup-overlay').addEventListener('click', function(event) {
    if (event.target === document.querySelector('.popup-overlay')) {
      closePopup();
    }
  });
});
