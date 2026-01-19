let ticking = false;

window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      if (window.innerWidth > 768) {
        document.querySelectorAll("[data-parallax]").forEach(el => {
          const speed = parseFloat(el.dataset.speed) || 0.2;
          el.style.transform = `translateY(${-window.scrollY * speed}px)`;
        });
      }
      ticking = false;
    });
    ticking = true;
  }
});
