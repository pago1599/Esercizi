var nome = "Fabio"; // var --> può essere riassegnata = si - può essere ridefinita = si - Ambito di funzione //

console.log(nome);

let nome = "Fabio"; // let --> può essere riassegnata = si - può essere ridefinita = no - Ambito di scope (parentesi graffe {}) //

console.log(nome);

const nome = "Clara"; // const --> può essere riassegnata = no - può essere ridefinita = no - Ambito di scope (parentesi graffe {}) //

console.log(nome);


// Tipi primitivi


// Tipo stringa 
let saluto = "Ciao!";

// Tipo numero
let conto = 20;
let contoDecimale = 20.5;

// Tipo booleano
let userIsOnLine = true; // true or false 
userIsOnLine = false;

// Tipo undefined
let name; // variabile dichiarata
console.log(name); // ma non inizializzata

// Tipo null 
let userDisconnet = null; // assegnare un valore vuoto intenzionalmente
// inizialmente utente online, quindi null
// utente si disconnette, quindi true
// utente si riconnette, quindi false


// Tip object

// Oggetto --> Collezzione di coppie chave-valore
let persona = {
    nome: "Fabio",
    età: 25,
    città: "Terralba",
};
console.log(persona) // legge tutte le info
console.log(persona.nome) // legge la info specifica

// Array --> Liste ordinate di elementi
let numeri = [1, 2 ,3 ,4 ,5]; // possono essere elenchi tipi di dati diversi tra loro (parole, numeri, ecc.)
console.log(numeri[0]) // le parentesi quadre indicano la posizione dell'elemento, che parte da 0, quindi in questo caso ci stiamo riferendo al numero 1

//Funzione
function somma(a, b) {
    return a + b;
}
console.log(somma)(2, 3); // assegnamo valori diversi ad a e b e la funzione ci farà sempre la somma dei valori assegnati
console.log(somma)(5, 4);


//Esempio riassuntivo
let nome = "Fabio";
const annoCorrente = 2024
var annoNascita = 1999;

let età = annoCorrente - annoNascita;

console.log ("Ciao mi chiamo", + nome, " e ho", + età, "anni");