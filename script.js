// Shared nav behavior for all pages
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.menu-btn');
  const panel = document.querySelector('.nav-panel');
  const scrim = document.querySelector('.scrim');
  const closeBtn = document.querySelector('.nav-close');

  function openNav(){
    btn.classList.add('open');
    panel.classList.add('open');
    scrim.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
  }
  function closeNav(){
    btn.classList.remove('open');
    panel.classList.remove('open');
    scrim.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
  }

  btn.addEventListener('click', () => {
    panel.classList.contains('open') ? closeNav() : openNav();
  });
  scrim.addEventListener('click', closeNav);
  closeBtn.addEventListener('click', closeNav);
  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape') closeNav();
  });
});
