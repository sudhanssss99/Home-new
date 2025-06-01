// Hide/show bottom nav on scroll direction
let lastScroll = window.scrollY;
let nav = document.querySelector('.bottom-nav');
let ticking = false;

function onScroll() {
  let currScroll = window.scrollY;
  if (currScroll > lastScroll + 8) {
    // Scrolling down - hide
    nav.classList.add('nav-hide');
  } else if (currScroll < lastScroll - 8) {
    // Scrolling up - show
    nav.classList.remove('nav-hide');
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
