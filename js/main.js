// Menú móvil
const toggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('menu');

toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!open));
  menu.classList.toggle('open', !open);
});

menu.querySelectorAll('a').forEach((link) =>
  link.addEventListener('click', () => {
    toggle.setAttribute('aria-expanded', 'false');
    menu.classList.remove('open');
  })
);

// Borde del header al hacer scroll
const header = document.querySelector('.site-header');
const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 8);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Aparición suave de elementos
const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  revealItems.forEach((el) => observer.observe(el));
} else {
  revealItems.forEach((el) => el.classList.add('visible'));
}

// Formulario de contacto (solo validación en el navegador; no hay servidor)
const form = document.getElementById('contact-form');
const status = form.querySelector('.form-status');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  let valid = true;

  form.querySelectorAll('[required]').forEach((input) => {
    const ok = input.type === 'email'
      ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim())
      : input.value.trim() !== '';
    input.closest('.field').classList.toggle('invalid', !ok);
    if (!ok) valid = false;
  });

  if (!valid) {
    status.textContent = 'Revisa tu nombre y correo electrónico.';
    status.className = 'form-status error';
    return;
  }

  const nombre = form.nombre.value.trim().split(' ')[0];
  status.textContent = `¡Gracias, ${nombre}! Te contactaremos en menos de 24 horas.`;
  status.className = 'form-status ok';
  form.reset();
});

document.getElementById('year').textContent = new Date().getFullYear();
