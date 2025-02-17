// Toggle mobile menu
const menuToggle = document.getElementById("mobile-menu");
const navMenu = document.querySelector(".nav-menu");
const footer = document.querySelector(".footer-container"); // Select the footer container

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("is-active");
  navMenu.classList.toggle("active");
  footer.classList.toggle("hidden"); // Toggle the hidden class on the footer
});
// typing animation script h1 piano hero
var typed = new Typed(".typing", {
  strings: ["Piano", "Guitar", "Saxophone", "Improvisation", "Ear-Training"],
  typeSpeed: 120,
  backSpeed: 60,
  loop: true,
});
// typing animation script p piano hero
var typed = new Typed(".typingp", {
  strings: [
    "Eight years of experience in just a few lessons!",
    "Prefer personalized training? Try Tutoring!",
    "No available time? Try my flexible online course!",
  ],
  typeSpeed: 20,
  backSpeed: 40,
  loop: true,
  backDelay: 2500,
});
