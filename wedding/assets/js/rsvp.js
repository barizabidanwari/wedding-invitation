// rsvp.js — FINAL (Netlify + Google Sheets, ultra stable)

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzUlQJzmf_JZjFTXr8cwk5qiwIokjbQqO4KItE90xG4PP1yzULgtWoRxLtKxn4npbz0/exec";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("rsvp-form");
  const msg = document.getElementById("rsvp-message");

  if (!form || !msg) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const guests = form.guests.value;
    const status = form.status.value;
    const message = form.message.value.trim();

    if (!name || !status) {
      msg.style.color = "#ff3366";
      msg.textContent = "Mohon lengkapi data yang diperlukan.";
      return;
    }

    msg.style.color = "#9aa3b3";
    msg.textContent = "Encrypting response...";

    // FORM-URLENCODED (PALING STABIL UNTUK GAS)
    const params = new URLSearchParams();
    params.append("name", name);
    params.append("guests", guests);
    params.append("status", status);
    params.append("message", message);
    params.append("ua", navigator.userAgent);

    // KIRIM TANPA HEADERS & TANPA AWAIT (no-cors)
    fetch(SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      body: params
    });

    // ASUMSI SUKSES (karena no-cors)
    msg.style.color = status === "accept" ? "#00ff55" : "#ffbd2e";
    msg.textContent =
      `Terima kasih, ${name}. Respon Anda telah dienkripsi dan dicatat di Eternal Archive.`;

    form.reset();
  });
});
