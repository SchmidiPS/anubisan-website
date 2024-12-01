// scripts.js

// Mobile Menu Toggle
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-active');
    menuToggle.classList.toggle('is-active');
});

// Rotierende Testimonials
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');

function rotateTestimonials() {
    testimonials[currentTestimonial].classList.remove('active'); // Aktuelles Testimonial ausblenden
    currentTestimonial = (currentTestimonial + 1) % testimonials.length; // Zum nächsten wechseln
    testimonials[currentTestimonial].classList.add('active'); // Neues Testimonial einblenden
}

// Testimonials alle 5 Sekunden rotieren
setInterval(rotateTestimonials, 5000);
