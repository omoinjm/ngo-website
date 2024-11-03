// Navbar.js
let click = false;
let button = true;

const handleClick = () => {
  click = !click;
  document.getElementById('nav-menu').classList.toggle('active');
  document.getElementById('menu-icon').classList.toggle('fa-times');
  document.getElementById('menu-icon').classList.toggle('fa-bars');
};

const closeMobileMenu = () => {
  click = false;
  document.getElementById('nav-menu').classList.remove('active');
  document.getElementById('menu-icon').classList.add('fa-bars');
  document.getElementById('menu-icon').classList.remove('fa-times');
};

const showButton = () => {
  const signUpButton = document.getElementById('sign-up-button');
  if (signUpButton) {
    if (window.innerWidth <= 960) {
      button = false;
      signUpButton.style.display = 'none';
    } else {
      button = true;
      signUpButton.style.display = 'block';
    }
  }
};

window.addEventListener('resize', showButton);
document.addEventListener('DOMContentLoaded', showButton);