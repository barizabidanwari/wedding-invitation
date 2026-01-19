// countdown.js

// SET TANGGAL ACARA DI SINI
// Format: "YYYY-MM-DDTHH:MM:SS"
const WEDDING_DATETIME = "2026-02-14T10:00:00";

document.addEventListener("DOMContentLoaded", () => {
  const target = new Date(WEDDING_DATETIME).getTime();
  if (isNaN(target)) return;

  function updateCountdown() {
    const now = new Date().getTime();
    const diff = target - now;

    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");

    if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

    if (diff <= 0) {
      daysEl.textContent = "00";
      hoursEl.textContent = "00";
      minutesEl.textContent = "00";
      secondsEl.textContent = "00";
      return;
    }

    const sec = Math.floor(diff / 1000);
    const days = Math.floor(sec / (60 * 60 * 24));
    const hours = Math.floor((sec % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((sec % (60 * 60)) / 60);
    const seconds = sec % 60;

    daysEl.textContent = String(days).padStart(2, "0");
    hoursEl.textContent = String(hours).padStart(2, "0");
    minutesEl.textContent = String(minutes).padStart(2, "0");
    secondsEl.textContent = String(seconds).padStart(2, "0");
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
});
