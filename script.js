// Mobile menu
const burger = document.querySelector('.hamburger');
const links = document.querySelector('.nav-links');

burger?.addEventListener('click', () => {
  const expanded = burger.getAttribute('aria-expanded') === 'true' || false;
  burger.setAttribute('aria-expanded', (!expanded).toString());
  links.classList.toggle('show');
});

// Close menu on link click (mobile)
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => links.classList.remove('show'));
});

// Auto year in footer
document.getElementById('year').textContent = new Date().getFullYear();

const typingEl = document.querySelector('.typing');
typingEl.addEventListener('animationend', (e) => {
  if (e.animationName === 'typing') {
    typingEl.classList.add('done'); // remove cursor after typing done
  }
});

const aboutElements = document.querySelectorAll('.about-container, .about-img, .about-text-col');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

aboutElements.forEach(el => observer.observe(el));



