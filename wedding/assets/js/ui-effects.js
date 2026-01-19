// ui-effects.js

// (Opsional) efek kecil untuk hover glitch button, dll.
document.addEventListener("DOMContentLoaded", () => {
  // bisa dipakai untuk logika efek lain nanti
});

// LIGHTBOX GALLERY
document.addEventListener("DOMContentLoaded", () => {
  const galleryItems = document.querySelectorAll(".gallery-item");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  galleryItems.forEach((img) => {
    img.addEventListener("click", () => {
      lightboxImg.src = img.src;
      lightbox.style.display = "flex";
    });
  });

  // klik area gelap untuk menutup
  lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
  });
});