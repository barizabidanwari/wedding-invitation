// main.js

document.addEventListener("DOMContentLoaded", () => {
  initDecryptButton();
  startTerminalTyping();
});

function initDecryptButton() {
  const btn = document.getElementById("btn-decrypt");
  if (!btn) return;
  btn.addEventListener("click", () => {
    const cover = document.getElementById("cover");
    if (cover) {
      cover.scrollIntoView({ behavior: "smooth" });
    }
  });
}

function startTerminalTyping() {
  const el = document.getElementById("terminal-typing");
  if (!el) return;

  const text = [
    "> Establishing secure connection...",
    "> Verifying encrypted identity…",
    "> Accessing classified wedding archive...",
    ""
  ].join("\n");

  let idx = 0;
  el.classList.add("typing-cursor");

  function typeStep() {
    if (idx <= text.length) {
      el.textContent = text.slice(0, idx);
      idx++;
      setTimeout(typeStep, 35);
    } else {
      // stop cursor after finished
      setTimeout(() => {
        el.classList.remove("typing-cursor");
      }, 1000);
    }
  }

  typeStep();
}
