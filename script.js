const menuBtn = document.querySelector('.mobile_menu');
const nav = document.querySelector('.nav_links');
const navLinks = nav.childNodes;

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('open');
});

const closeNav = () => {
  nav.classList.remove('open');
};

navLinks.forEach((link) => {
  link.addEventListener('click', closeNav);
});
