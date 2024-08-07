// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.menu-button');
    menuButton.addEventListener('click', function() {
        document.querySelector('.sidebar').classList.toggle('active');
    });

    const learnMoreLink = document.querySelector('.learn-more');
    learnMoreLink.addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('all-experience').scrollIntoView({ behavior: 'smooth' });
    });
});
