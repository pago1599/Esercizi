let hisName;
let hisSurname = 'Rossi';
let hisFullname = hisName + " " + hisSurname;

if (hisName && hisSurname) {                  // esercizio 19
    console.log(hisFullname)
} else {
    console.log("Fullname is invalid")
}



const pin = 1500;

if (pin > 999 && pin <= 10000) {              // esercizio 19.1
    console.log("Pin is valid")
} else {                                      
    console.log("Pin is not valid")
}




const primitive = true;

if (typeof primitive === "string") {                              // esercizio 20
    console.log("Questa variabile è una stringa")
} else if (typeof primitive === "number") {
    console.log("Questa variabile è un numero")
} else if (typeof primitive === "boolean") {
    console.log("Questa variabile è booleana")
} else {
console.log("La variabile non ha un tipo")
}
