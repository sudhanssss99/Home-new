// Shrink navbar to floating feed button on scroll down, restore on scroll up

let lastScroll = window.scrollY;
let nav = document.querySelector('.bottom-nav');
let ticking = false;

function onScroll() {
  let currScroll = window.scrollY;
  if (currScroll > lastScroll + 8) {
    // Scrolling down - shrink to feed button
    nav.classList.add('shrunk');
  } else if (currScroll < lastScroll - 8) {
    // Scrolling up - restore full navbar
    nav.classList.remove('shrunk');
  }
  lastScroll = currScroll;
  ticking = false;
}
window.addEventListener('scroll', function() {
  if (!ticking) {
    window.requestAnimationFrame(onScroll);
    ticking = true;
  }
});

