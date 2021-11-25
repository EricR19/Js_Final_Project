let global = [];

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
    global = words
    let sizeArray = [];
    for (let i = 0; i < words.length; i++) {
        sizeArray[i] = "_";
    }
    document.getElementById("hidden").innerHTML = sizeArray.join(" ");
};

let letters = (letter) => {
    let a = letter;
    console.log(global)
}