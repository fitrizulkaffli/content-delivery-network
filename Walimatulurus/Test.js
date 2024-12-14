document.addEventListener("DOMContentLoaded", function() {
  // Select the element you want to attach the onclick to
  var element = document.querySelector('.premium-mobile-menu__item.elementor-repeater-item-3e1d4c1');
  
  // Select the popup and close button
  var popup = document.getElementById('popup');
  var closeBtn = document.querySelector('.close-btn');

  // Add click event to the element
  if (element) {
    element.onclick = function() {
      // Show the popup when the element is clicked
      popup.style.display = 'block';
    };
  }

  // Add click event to close the popup when the close button is clicked
  if (closeBtn) {
    closeBtn.onclick = function() {
      // Hide the popup when the close button is clicked
      popup.style.display = 'none';
    };
  }

  // Close the popup if the user clicks anywhere outside the popup content
  window.onclick = function(event) {
    if (event.target === popup) {
      popup.style.display = 'none';
    }
  };
});
