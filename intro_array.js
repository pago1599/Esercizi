// introduzione agli array

// gli array ci permettono di memorizzare e manipolare collezione ordinate di dati

// negli array possiamo trovare qualsiasi tipo di dato: numeri, stringhe, oggetti, altri array, ecc.

// gli elementi sono accessibili tramite il loro indice, che parte da 0

const numeri = [1, 2, 3, 4, 5]; // questo è un array di 5 elementi, di tipo int, con i numeri da 1 a 5
const colori = ["rosso", "verde", "blu", "arancione"]; // questo è un array di 4 elementi, di tipo stringa, con 4 colori

const arrayMisto = [43, "ciao", true, { name: "Giuseppe" }, [1, 2, 3]]; // questo è un array misto di 5 elemnti, di tipi vari, con un int, una stringa, booleano, oggetto, altro array

const frutti = ["mela", "banana", "arancia"];

// modifica di un elemento in base alla posizione

frutti[0] = "kiwi";
frutti[3] = "pera";

// per conoscere il numero degli elementi presenti dentro l'array, possiamo usare con la notazione punto, la proprietà speciale length
frutti[frutti.length] = "ananas"; // in questo caso è come se avessimo scritto frutti[4] = "ananas"

// metodi semplici degli array

// metodo push, aggiunge un elemento alla fine dell'array in modo dinamico
//frutti.push("fragola");

// metodo pop, rimuove l'ultimo elemento e lo restituisce come return
const ultimoFrutto = frutti.pop();

// metodo unshift, aggiunge un elemento all'inizio dell'array
frutti.unshift("limone");

// metodo shift, rimuove il primo elemento dell'array e lo restituisce
const primoFrutto = frutti.shift();

// primo metodo, iterazione con ciclo for
for (let i = 0; i < frutti.length; i++) {
  //console.log(frutti[i]);
}

// secondo metodo, usiamo il metodo forEach degli array, itera all'interno degli elementi ed esegue una funzione per ciascuno di essi
frutti.forEach(function (frutto, indice) {
  //console.log(indice + ": " + frutto);
});

// per conoscere l'indice della prima occorrenza di un elemento, usiamo il metodo indexOf. Se l'elemento non esiste, restituiscce -1
const indiceMela = frutti.indexOf("mela");

// metodo slice, restituisce una copia di una porzione del''array
const alcuniFrutti = frutti.slice(1, 3);
//console.log(frutti);
//console.log(alcuniFrutti);

// metodo splice, modifica l'array aggiungendo o rimuovendo o sostituendo elementi
frutti.splice(2, 1);
//console.log(frutti);

// esempio matrice
const matrice = [
  [1, 2, 3], // 0
  [4, 5, 6], // 1
  [7, 8, 9], // 2
];

// esempio array strutturato
const studenti = ["Christian", "Andrea S.", "Fabio", "Dario", "Andrea L."];

studenti.push("Clara");

studenti.shift();

studenti.indexOf("Fabio");

studenti.forEach(function (studente) {
  //console.log(studente);
});

// metodo includes degli array, ci restituisce se un item è presente dentro un array con un return booleano.

// rimuovi l'ultimo elemento dell'array e salvane il valore rimosso in una variabile ultimoItem.
const listaSpesa = ["latte", "pane", "uova", "burro", "formaggio"];

//const ultimoItem = listaSpesa.pop();

//console.log(listaSpesa);
//console.log(ultimoItem);

// aggiungere in fondo alla lista i prodotti pasta e salsa.

//listaSpesa.push("pasta", "salsa");

//console.log(listaSpesa);

// rimuoviamo il primo elemento della lista e salviamo il valore in una variavile primoItem.

//const primoItem = listaSpesa.shift();

//console.log(primoItem);

// aggiungiamo all'inizio dell'array acqua e olio.

//listaSpesa.unshift("acqua", "olio");

//console.log(listaSpesa);

// controlliamo se uova è presente. In caso affermativo stampiamo il suo indice, se no, aggiungiamolo di nuovo in fondo.

const indiceUova = listaSpesa.indexOf("uova");

if (indiceUova === -1) {
  listaSpesa.push("uova");
} else {
  //console.log(indiceUova);
}

// analizziamo un sottoinsieme di voti: Estrai i primi 5 e salvali in una costante chiamata votiIniziali.

let voti = [6, 7, 8, 9, 10, 7, 8, 6, 5];

const votiIniziali = voti.slice(0, 5);

//console.log(votiIniziali);

// estraiamo gli ultimi 3 voti dell'array e li memorizziamo in votiFinali.

const votiFinali = voti.slice(-3);

//console.log(votiFinali);

// controlliamo se esiste il voto 10 compare nei voti iniziali, se non compare verifica nei voti finali. Stampa i messaggi appropriati.

function checkVoto(voteToCheck) {
  if (
    !votiIniziali.includes(voteToCheck) &&
    !votiFinali.includes(voteToCheck)
  ) {
    console.log("Purtroppo non hai mai preso 10");
    return;
  }
  // da qui in poi siamo sicuri che c'è almeno un 10
  if (votiIniziali.includes(voteToCheck)) {
    console.log("Hai preso almeno un 10 nei tuoi voti iniziali!");
  }
  if (votiFinali.includes(voteToCheck)) {
    console.log("Hai preso almeno un 10 nei voti finali!");
  }
}
