// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

// Fade-in on scroll
const faders = document.querySelectorAll('.fade-in-section');
const appearOptions = { threshold: 0.1 };

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        appearOnScroll.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));

// Parallax effect
const hero = document.getElementById('hero');
window.addEventListener('scroll', () => {
    const offset = window.pageYOffset;
    hero.style.backgroundPositionY = offset * 0.5 + "px";
});
