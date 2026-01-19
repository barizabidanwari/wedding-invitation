// assets/js/matrix-bg.js

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("matrix-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  // karakter matrix
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*";
  const symbols = chars.split("");

  const fontSize = 14;
  let columns = Math.floor(window.innerWidth / fontSize);
  let drops = new Array(columns).fill(1);

  function draw() {
    // sedikit transparan biar ada efek jejak
    ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
      if (Math.random() > 0.5) {
        const text = symbols[Math.floor(Math.random() * symbols.length)];
        ctx.fillStyle = i % 2 === 0 ? "#00ff00" : "#00cc55";
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i] += 0.5; // kecepatan jatuh (semakin besar semakin cepat)
      }
    }

    requestAnimationFrame(draw);
  }

  draw();
});