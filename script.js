const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn?.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(open));
  document.body.classList.toggle('menu-open', open);
});

document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    document.body.classList.remove('menu-open');
    menuBtn?.setAttribute('aria-expanded', 'false');
  });
});

document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const answer = item.querySelector('.faq-answer');
    const active = item.classList.contains('active');

    document.querySelectorAll('.faq-item.active').forEach(other => {
      other.classList.remove('active');
      other.querySelector('.faq-answer').style.maxHeight = null;
    });

    if (!active) {
      item.classList.add('active');
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('bookingForm');
const formMessage = document.getElementById('formMessage');

form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const name = data.get('name') || 'there';
  formMessage.textContent = `Thank you, ${name}. This demo is ready to connect to your real booking backend.`;
  form.reset();
});
