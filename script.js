const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const result = document.getElementById("result");

let scale = 1;

yesBtn.addEventListener("click", () => {
  result.classList.remove("hidden");
  result.innerHTML = `
    🌊 Trabzon sevdalısı<br>
    🏀 Rodman ruhu<br>
    🏎️ Verstappen hırsı<br><br>
    <b>Ve çok seviliyorsun.</b>
  `;
});

noBtn.addEventListener("click", () => {
  scale += 0.2;
  yesBtn.style.transform = `scale(${scale})`;
});
