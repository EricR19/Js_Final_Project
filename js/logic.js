"use stric";

let global = [];
let wordFormed = [];
let pointsPlayer = 0;
let pointsCpu = 0;
let shift = 0;
let clue = "";

function arrayStrings() {
  let arrayString = [
    { animal: "perro", pista: "Ladra!" },
    { animal: "gato", pista: "Hace Miau!" },
    {
      animal: "foca",
      pista:
        "Sus cuerpos son fusiformes y alargados. Están adaptados para poder desplazarse por el medio acuático.",
    },
    { animal: "lobo", pista: "Es parecido al perro solo que salvaje" },
    { animal: "toro", pista: "Los XXXXX a la tica, se vive por teletica" },
    { animal: "abeja", pista: "Ayudan en la polimizacion" },
    { animal: "burro", pista: "Se le conoce tambien con el nombre de Asno" },
    { animal: "gallo", pista: "Nos levanta en la mañana" },
    { animal: "delfin", pista: "Es acuatico y son muy inteligentes" },
    {
      animal: "zorro",
      pista:
        "Astucia, inteligencia y agilidad definen a este escurridizo animal. Pertenece a la familia de los cánidos y suelen tener un tamaño pequeño",
    },
    { animal: "aguila", pista: "Animal emblema de USA" },
    {
      animal: "avispa",
      pista: "Pican y el dolor es muy agudo, es prima de la abeja",
    },
    {
      animal: "ciervo",
      pista: "Se les conocen tambien con el nombre de venados",
    },
    { animal: "raton", pista: "Les gusta el queso y son enemigos del gato" },
    { animal: "buitre", pista: "Son aves carroñeras" },
    {
      animal: "armadillo",
      pista: "Son mamiferos y tienen un caparazon en todo su cuerpo",
    },
    { animal: "ballena", pista: "Es el animal mas grande del planeta" },
    {
      animal: "bisonte",
      pista: "los animales terrestres más pesados ​​de América del Norte",
    },
    {
      animal: "elefante",
      pista: "Son animales con orejas enormes y tienen dos colmillos de marfil",
    },
    {
      animal: "rinoceronte",
      pista:
        "En su nariz tienen un cuerno y son animales muy grandes y pesados",
    },
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
  getClue(word.pista);
};

let getClue = (help) => {
  clue = help;
};
let clues = () => {
  let sh = shifts();
  if (sh == 10) {
    msjLost();
  } else {
    document.getElementById("pista").innerHTML = clue;
  }
};
let underline = (word) => {
  let words = word.animal.split("");
  global = words;
  for (let i = 0; i < words.length; i++) {
    wordFormed[i] = "_";
  }
  document.getElementById("hidden").innerHTML = wordFormed.join(" ");
};

let letters = (letter) => {
  if (wordFormed.length != 0) {
    let simpleLetter = letter;
    logicGame(simpleLetter);
    document.getElementById("hidden").innerHTML = wordFormed.join(" ");
  } else {
    newGame();
  }
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
    msjLost();
  }
  points();
};
let refresh = () => {
  document.getElementById("pista").innerHTML = ``;
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
let msjLost = () => {
  pointsCpu++;
  alert(`Uuuh! Perdio, la palabra era: ${global.toString().replace(/,/g, "")}`);
  newGame();
  document.getElementById("puntosCpu").innerHTML = pointsCpu;
};
