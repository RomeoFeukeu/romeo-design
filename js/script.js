
let navbar = document.querySelector('nav');

let menulinks = document.getElementById('menu-Links');


function toggleMenu() {
  menulinks.classList.toggle('show-menu');
}

window.onscroll = function() {
  if (window.scrollY > 0) {
    navbar.style.background = 'rgba(45, 44, 44, 0.9)';
    
  } else {
    navbar.style.backgroundColor = 'transparent';
  }
}