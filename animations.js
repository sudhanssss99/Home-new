// Demo hover pop for tiles
document.querySelectorAll('.tile').forEach(tile => {
  tile.addEventListener('mouseenter', () => {
    tile.classList.add('animated-pop');
  });
  tile.addEventListener('mouseleave', () => {
    tile.classList.remove('animated-pop');
  });
});

// Optionally, highlight the correct nav item as active based on URL
document.addEventListener('DOMContentLoaded', function() {
  // Simple auto-active for demonstration: matches by filename
  const links = document.querySelectorAll('.bottom-nav a');
  const current = window.location.pathname.split('/').pop() || 'index.html';
  links.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === current) {
      link.classList.add('active');
    }
  });
});
