// Get the form and modal elements
const signupform = document.getElementById('signupform');
const popupModal = document.getElementById('popup-modal');
const closeButton = document.querySelector('.close-button');

// Handle form submission
signupform.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Show the popup modal
  popupModal.style.display = 'block';
});

// Close the popup modal when the close button is clicked
closeButton.addEventListener('click', function() {
  popupModal.style.display = 'none';
});

// Close the popup modal when clicked outside the modal content
window.addEventListener('click', function(event) {
  if (event.target === popupModal) {
    popupModal.style.display = 'none';
  }
});
