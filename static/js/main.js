// Lazy-load videos when they enter the viewport
document.addEventListener('DOMContentLoaded', () => {
  const videos = document.querySelectorAll('video[data-src]');
  if (!videos.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const v = entry.target;
      v.src = v.dataset.src;
      v.load();
      observer.unobserve(v);
    });
  }, { rootMargin: '200px' });

  videos.forEach(v => observer.observe(v));
});
