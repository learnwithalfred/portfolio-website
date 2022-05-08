const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const header = document.querySelector('header');
const body = document.querySelector('body');
// const logo = document.querySelector('nav__logo');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  header.classList.add('full-height');
  body.classList.add('no-scroll-bg');
  // logo.classList.toggle('d-none');
});

document.querySelectorAll('.nav-link').forEach((item) => {
  item.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    header.classList.remove('full-height');
    body.classList.remove('no-scroll-bg');
  });
});
