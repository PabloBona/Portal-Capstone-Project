/* Menu Burguer*/

const menuButton = document.querySelector('.burguer-menu button');
const mobileNav = document.querySelector('.navigation');
const mobileLinks = mobileNav.querySelectorAll('.nav-links a');
const menuImage = document.querySelector('.burguer-menu button i');

function toggleMenuImage() {
  if (mobileNav.classList.contains('active')) {
    menuImage.classList.add('bx-x');
  } else {
    menuImage.classList.remove('bx-x');
  }
}

menuButton.addEventListener('click', () => {
  mobileNav.classList.toggle('active');
  toggleMenuImage();
});

mobileLinks.forEach((link) => {
  link.addEventListener('click', () => {
    mobileNav.classList.remove('active');
    toggleMenuImage();
  });
});
