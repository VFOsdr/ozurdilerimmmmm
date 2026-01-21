const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const result = document.getElementById("result");

let yesSize = 1;

yesBtn.addEventListener("click", () => {
  result.classList.remove("hidden");
  result.innerHTML = `
    💙 Sen muazzam bir <b>Trabzonlu</b><br>
    🏀 Efsane bir <b>Rodman</b> sevdalısı<br>
    🏎️ Gerçek bir <b>Verstappen</b> destekleyicisi<br><br>
    Ve şunu bil: <b>ÇOK SEVİLİYORSUN</b> 💙
  `;
});

noBtn.addEventListener("click", () => {
  yesSize += 0.3;
  yesBtn.style.transform = `scale(${yesSize})`;
});
