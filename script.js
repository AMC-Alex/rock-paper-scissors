//DOM
const btnRock = document.getElementById("btnRock");
const btnScissor = document.getElementById("btnScissor");
const btnPaper = document.getElementById("btnPaper");
const reset = document.getElementById("btnReset");
const textMsg = document.querySelector(".text-result");
const textCpu = document.querySelector(".text-cpu");
const textPlayer = document.querySelector(".text-player");
const winResult = document.getElementById("winResult");
const drawResult = document.getElementById("drawResult");
const loseResult = document.getElementById("loseResult");

let win = 0;
let draw = 0;
let lose = 0;
const choose = ["Piedra", "Papel", "Tijeras"];

winResult.textContent = win;
drawResult.textContent = draw;
loseResult.textContent = lose;

//Logica
function randomPlay() {
  let randomChoose = Math.floor(Math.random() * 3);
  return randomChoose;
}
function game(play, pc) {
  textPlayer.textContent = "El jugador Eligió: " + play;
  textCpu.textContent = "La CPU eligió: " + pc;

  if (play === pc) {
    textMsg.textContent = "Empate.";
    ++draw;
  } else if (
    (play === "Piedra" && pc === "Papel") ||
    (play === "Papel" && pc === "Tijeras") ||
    (play === "Tijeras" && pc === "Piedra")
  ) {
    textMsg.textContent = "Perdiste.";
    ++lose;
  } else {
    textMsg.textContent = "Ganaste.";
    ++win;
  }
  winResult.textContent = win;
  drawResult.textContent = draw;
  loseResult.textContent = lose;
}

//Eventos
btnRock.addEventListener("click", () => {
  let choice = randomPlay();
  let player = choose[0];
  let CPU = choose[choice];
  game(player, CPU);
});

btnPaper.addEventListener("click", () => {
  let choice = randomPlay();
  let player = choose[1];
  let CPU = choose[choice];
  game(player, CPU);
});

btnScissor.addEventListener("click", () => {
  let choice = randomPlay();
  let player = choose[2];
  let CPU = choose[choice];
  game(player, CPU);
});

reset.addEventListener("click", () => {
  textPlayer.textContent = "";
  textMsg.textContent = "";
  textCpu.textContent = "";
  winResult.textContent = 0;
  drawResult.textContent = 0;
  loseResult.textContent = 0;
});
