// Toggle Reveal on Scroll
window.addEventListener('scroll', revealElements);

function revealElements() {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(function(el) {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            el.classList.add('active');
        } else {
            el.classList.remove('active');
        }
    });
}

// AOS Initialization
document.addEventListener('DOMContentLoaded', function() {
    AOS.init();
});

// ScrollReveal Initialization
ScrollReveal().reveal('.project-card', { interval: 200 });
