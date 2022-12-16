const popup = document.getElementById('confidentiality-popup');
const declineButton = document.getElementById('decline-button');
const acceptButton = document.getElementById('accept-button');
const backdrop = document.querySelector('body::before');

declineButton.addEventListener('click', function() {
    popup.style.display = 'none';
    
  });
  
  acceptButton.addEventListener('click', function() {
    popup.style.display = 'none';
    
  });
  
