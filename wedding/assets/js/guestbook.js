// guestbook.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("guestbook-form");
  const msg = document.getElementById("guestbook-msg");

  if (!form || !msg) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("guest-name").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !message) {
      msg.style.color = "#ff3366";
      msg.textContent = "Pesan dan nama tidak boleh kosong.";
      return;
    }

    msg.style.color = "#00ff55";
    msg.textContent =
      `Pesan dari ${name} telah dienkripsi dan disimpan di Eternal Archive.`;

    form.reset();
  });
});
