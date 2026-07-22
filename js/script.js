
let nav = document.querySelector('nav');
window.onscroll = function() {
  if (window.scrollY > 0) {
    nav.style.backgroundColor = 'rgba(254, 254, 254, 0.9)';
    
  } else {
    nav.style.backgroundColor = 'transparent';
  }
};