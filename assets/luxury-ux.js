/**
 * Luxury UX - Maison Luxe Prototype Logic
 */

document.addEventListener('DOMContentLoaded', () => {
    initCustomCursor();
    initStickyHeader();
    initScrollReveal();
    initParallax();
});

function initCustomCursor() {
    const cursor = document.getElementById('cursor');
    if (!cursor) return;

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    document.querySelectorAll('a, button, .btn-luxury').forEach(item => {
        item.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(4)';
            cursor.style.background = 'rgba(0,0,0,0.1)';
        });
        item.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursor.style.background = 'var(--color-black)';
        });
    });
}

function initStickyHeader() {
    const header = document.querySelector('.header-wrapper') || document.querySelector('header');
    if (!header) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.luxury-reveal, .reveal').forEach(el => {
        el.classList.add('luxury-reveal');
        observer.observe(el);
    });
}

function initParallax() {
    const heroImage = document.querySelector('.luxury-hero__media img');
    if (!heroImage) return;

    window.addEventListener('scroll', () => {
        const scrollVal = window.pageYOffset;
        heroImage.style.transform = `translateY(${scrollVal * 0.4}px)`;
    });
}
