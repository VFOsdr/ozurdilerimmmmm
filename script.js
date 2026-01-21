const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const result = document.getElementById("result");

let yesScale = 1;

yesBtn.addEventListener("click", () => {
  result.classList.remove("hidden");
  result.innerHTML = `
    🌊 Ruhuyla <b>Trabzon</b> yaşayan<br>
    🏀 Çılgınlığıyla <b>Rodman</b> seven<br>
    🏎️ Tutkusuyla <b>Verstappen</b> destekleyen<br><br>
    Ve şunu bil:<br>
    <b>Çok değerlisin. Çok seviliyorsun.</b>
  `;
});

noBtn.addEventListener("click", () => {
  yesScale += 0.15;
  yesBtn.style.transform = `scale(${yesScale})`;
});
