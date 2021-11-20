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
  document.getElementById("palabra").innerHTML = array[random()];
};
