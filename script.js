// script.js
document.getElementById('hamburgerBtn').addEventListener('click', function() {
    const navbarLinks = document.querySelector('.navbar ul');
    navbarLinks.classList.toggle('show'); 
});