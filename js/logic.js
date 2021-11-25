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
  let randomNumber = 0;
  randomNumber = Math.random() * arrayStrings().length;
  console.log(Math.floor(randomNumber));
  return parseInt(randomNumber);
};

let newGame = () => {
  let array = arrayStrings();
  let word = array[random()];
  document.getElementById("palabra").innerHTML = word;
  underline(word);
};

let underline = (word) => {
  let words = word.split("");
  console.log(words);
  let sizeArray = [];
  for (let i = 0; i < words.length; i++) {
    sizeArray[i] = "_";
  }
  let normalizes = normalize(sizeArray);
  document.getElementById("hidden").innerHTML = normalizes;
};

let normalize = (word) => {
  let normal = word.toString();
  normal = normal.replace(/,/g, " ");
  return normal;
};
