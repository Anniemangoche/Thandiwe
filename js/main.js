const nav = document.getElementById('siteNav');
if (nav) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  });
}
