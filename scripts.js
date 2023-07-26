let show = true;

const menuSection = document.querySelector('.menu-section');
const menuMobile = menuSection.querySelector('.menu-mobile');

menuMobile.addEventListener('click', () => {

  document.body.style.overflow = show ? 'hidden' : 'initial';

  menuSection.classList.toggle('on', show);
  show = !show;
})