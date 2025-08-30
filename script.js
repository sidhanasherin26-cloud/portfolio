// Smooth scroll for nav links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('header');
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(0,0,0,0.9)";
  } else {
    navbar.style.background = "rgba(0,0,0,0.8)";
  }
});