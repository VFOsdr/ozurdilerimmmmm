const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const result = document.getElementById("result");

let scale = 1;

yesBtn.addEventListener("click", () => {
  result.classList.remove("hidden");
  result.innerHTML = `
    🌊 Sen muazzzam bir Trabzonlu,<br>
    🏀 Rodman ruhlu ve<br>
    🏎️ Verstappen gibi hırslı bir insansın.<br><br>
    <b>Değerlisin, seviliyorsun!</b>
  `;
});

noBtn.addEventListener("click", () => {
  scale += 0.2;
  yesBtn.style.transform = `scale(${scale})`;
});
