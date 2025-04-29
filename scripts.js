// Typing Animation
const typed = new Typed(".auto-type", {
  strings: ["HEY, WE'RE MARKEFOX"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true
});

// Contact Form Toggle
document.getElementById('contact-button').addEventListener('click', () => {
  const contactForm = document.getElementById('contact-form');
  contactForm.style.maxHeight = contactForm.style.maxHeight === '500px' ? '0px' : '500px';
});

// About Section Fade In
document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  });

  document.querySelectorAll('.hidden').forEach(el => observer.observe(el));
});

