let global = [];
let wordFormed = [];
let notFormer = [];

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
    }
  }
  if (!global.toString().includes(data)) {
    let r = document.getElementById(data);
    r.style.cursor = "not-allowed";
    r.style.backgroundColor = "red";
    notFormer.push(data);
  }
};
let refresh = () => {
  for (let i = 0; i < wordFormed.length; i++) {
    let z = document.getElementById(wordFormed[i]);
    z.style.cursor = "pointer";
    z.style.background = "hsl(168, 36%, 52%)";
  }
  for (let z = 0; z < notFormer.length; z++) {
    let a = document.getElementById(notFormer[z]);
    a.style.cursor = "pointer";
    a.style.background = "hsl(168, 36%, 52%)";
  }
};
