let global = [];
let wordFormed = [];
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
      document.getElementById(
        "Elegida"
      ).innerHTML = `La letra elegida es: ${data}`;
    }
  }
  if (!global.toString().includes(data)) {
    var sh = shifts();
    document.getElementById(
      "Elegida"
    ).innerHTML = `La letra elegida es: ${data}`;
  }
  if (sh == 10) {
    pointsCpu++;
    alert(
      `Uuuh! Perdio, la palabra era: ${global.toString().replace(/,/g, "")}`
    );
    newGame();
    document.getElementById("puntosCpu").innerHTML = pointsCpu;
  }
  points();
};
let refresh = () => {
  document.getElementById("Elegida").innerHTML = ``;
  shift = 0;
  for (let i = 0; i < wordFormed.length; i++) {
    document.getElementById("shifts").innerHTML = "";
    let z = document.getElementById(wordFormed[i]);
    if (wordFormed[i] != "_") {
      z.style.cursor = "pointer";
      z.style.background = "hsl(168, 36%, 52%)";
      z.style.pointerEvents = "auto";
    }
  }
};
let points = () => {
  if (JSON.stringify(wordFormed) === JSON.stringify(global)) {
    alert(
      `Felicidades gano, la palabra era: ${global.toString().replace(/,/g, "")}`
    );
    pointsPlayer++;
    document.getElementById("puntosJugador").innerHTML = pointsPlayer;
    shift = 0;
    newGame();
  }
};

let shifts = () => {
  shift++;
  document.getElementById("shifts").innerHTML = `Intentos: ${shift}`;
  return shift;
};
