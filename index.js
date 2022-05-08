const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const header = document.querySelector('header');
const body = document.querySelector('body');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  header.classList.add('h-100');
  body.classList.add('no-scroll-bg');
});

document.querySelectorAll('.nav-link').forEach((item) => {
  item.addEventListener('click', () => {
    console.log('i am clicked');
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    header.classList.remove('h-100');
    body.classList.remove('no-scroll-bg');
  });
});
