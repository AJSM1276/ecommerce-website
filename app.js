// Toggle mobile menu
const menuToggle = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');
const footer = document.querySelector('.footer-container'); // Select the footer container

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('is-active');
    navMenu.classList.toggle('active');
    footer.classList.toggle('hidden'); // Toggle the hidden class on the footer
});