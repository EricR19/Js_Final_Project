let global = [];
let wordFormed = [];
let notFormer = [];
let pointsPlayer = 0;
let pointsCpu = 0;
let shift = 0;

function arrayStrings() {
  let arrayString = [
    "perro",
    "gato",
    "foca",
    "lobo",
    "toro",
    "abeja",
    "burro",
    "gallo",
    "delfin",
    "zorro",
    "aguila",
    "avispa",
    "ciervo",
    "delfin",
    "buitre",
    "armadillo",
    "ballena",
    "bisonte",
    "elefante",
    "rinoceronte",
  ];
  return arrayString;
}
let random = () => {
  wordFormed = [];
  let randomNumber = 0;
  randomNumber = Math.random() * arrayStrings().length;
  console.log(Math.floor(randomNumber));
  return parseInt(randomNumber);
};

let newGame = () => {
  shift = 0;
  refresh();
  let array = arrayStrings();
  let word = array[random()];
  underline(word);
};

let underline = (word) => {
  let words = word.split("");
  global = words;
  for (let i = 0; i < words.length; i++) {
    wordFormed[i] = "_";
  }
  document.getElementById("hidden").innerHTML = wordFormed.join(" ");
};

let letters = (letter) => {
  let simpleLetter = letter;
  logicGame(simpleLetter);
  document.getElementById("hidden").innerHTML = wordFormed.join(" ");
};

let logicGame = (data) => {
  for (let i = 0; i < global.length; i++) {
    if (data === global[i] && wordFormed[i] == "_") {
      wordFormed[i] = data;
      let r = document.getElementById(data);
      r.style.cursor = "not-allowed";
      r.style.backgroundColor = "black";
      r.style.pointerEvents = "none";
    }
  }
  if (!global.toString().includes(data)) {
    let r = document.getElementById(data);
    r.style.backgroundColor = "red";
    notFormer.push(data);
    var sh = shifts();
  }
  if (sh == 10) {
    pointsCpu++;
    alert("Perdio");
    newGame();
    document.getElementById("puntosCpu").innerHTML = pointsCpu;
  }
  points();
};
let refresh = () => {
  for (let i = 0; i < wordFormed.length; i++) {
    let z = document.getElementById(wordFormed[i]);
    if (wordFormed[i] != "_") {
      z.style.cursor = "pointer";
      z.style.background = "hsl(168, 36%, 52%)";
      z.style.pointerEvents = "auto";
    }
  }
  for (let z = 0; z < notFormer.length; z++) {
    let a = document.getElementById(notFormer[z]);
    a.style.cursor = "pointer";
    a.style.background = "hsl(168, 36%, 52%)";
  }
};
let points = () => {
  if (JSON.stringify(wordFormed) === JSON.stringify(global)) {
    alert(
      `Felicidades gano, la palabra era: ${global.toString().replace(/,/g, "")}`
    );
    pointsPlayer++;
    document.getElementById("puntosJugador").innerHTML = pointsPlayer;
    newGame();
  }
};

let shifts = () => {
  shift++;
  return shift;
};
