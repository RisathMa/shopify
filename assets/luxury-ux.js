/**
 * Luxury UX Interactions
 * - Sticky Header Glassmorphism
 * - Scroll Reveal Animations
 * - Smooth Scroll behavior
 */

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initScrollReveal();
  initSmoothScroll();
});

function initStickyHeader() {
  const header = document.querySelector('.header-wrapper') || document.querySelector('header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
      document.body.classList.add('is-scrolled');
    } else {
      header.classList.remove('scrolled');
      document.body.classList.remove('is-scrolled');
    }
  });
}

function initScrollReveal() {
  const options = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, options);

  // Target elements to reveal
  const revealElements = document.querySelectorAll('.luxury-reveal, .luxury-hero__heading, .luxury-product-card');
  revealElements.forEach(el => {
    el.classList.add('luxury-reveal'); // Ensure class exists
    observer.observe(el);
  });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
}
