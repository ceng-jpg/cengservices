// ── MOBILE MENU ──
function initMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const menu = document.querySelector('.mobile-menu');
  if (!hamburger || !menu) return;

  hamburger.addEventListener('click', () => {
    menu.classList.toggle('open');
  });

  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => menu.classList.remove('open'));
  });
}

// ── SCROLL ANIMATIONS ──
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('visible');
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

// ── TICKER ──
function initTicker() {
  const inner = document.querySelector('.ticker-inner');
  if (!inner) return;
  // Duplicate items INSIDE the same row for seamless infinite loop
  inner.innerHTML = inner.innerHTML + inner.innerHTML;
}

// ── FORM SUBMIT ──
function initForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('.btn-primary');
    btn.textContent = 'SENT ✓';
    btn.style.background = '#fff';
    setTimeout(() => {
      btn.textContent = 'SEND MESSAGE →';
      btn.style.background = '';
      form.reset();
    }, 3000);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initScrollAnimations();
  initTicker();
  initForm();
});