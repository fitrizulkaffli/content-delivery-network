document.addEventListener("DOMContentLoaded", function() {
  // Select the element
  var element = document.querySelector('.premium-mobile-menu__item.elementor-repeater-item-3e1d4c1');
  
  // Add the onclick event dynamically
  if (element) {
    element.onclick = function() {
      showLocationPopup();
    };
  }
});
