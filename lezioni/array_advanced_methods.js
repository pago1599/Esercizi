// metodo map

// applica una funzione a ogni elemento, restituendo il valore dell'elemento trasformato

const listaSpesa = ["latte", "uova", "burro"];
const elementiHTML = listaSpesa.map((element) => {
  return "<div class='lista-spesa-element'>" + element + "</div>";
});

//console.log(elementiHTML);

// metodo filter

// crea un nuovo array con gli elementi che soddisfano una condizione booleana

//const numeri = [1, 2, 3, 4, 5];
//const numeriPari = numeri.filter((n) => n % 2 === 0);

//console.log(numeriPari);

// metodi some ed every

// some - verifica se almeno un elemento soddisfa una certa condizione
// every - verifica se TUTTI gli elementi soddisfano una certa condizione

//const sonoPresentiNumeriNegativi = numeri.some((n) => n < 0);

//const sonoTuttiNumeriPositivi = numeri.every((n) => n > 0);

//console.log(sonoPresentiNumeriNegativi, sonoTuttiNumeriPositivi);

// metodo find e findIndex

// find - restituisce il primo elemento che soddisfa una condizione
// findIndex - restituisce l'indice del primo elemento che soddisfa una condzione

const users = [
  { nome: "Fabio", age: 23 },
  { nome: "Michele", age: 31 },
  { nome: "Dario", age: 34 },
];

const firstOver30 = users.find((user) => user.age > 30);
const firstOver30Index = users.findIndex((user) => user.age > 30);

//console.log(firstOver30);

// metodo sort

// sort - ordina array secondo una funzione di confronto

// ordiniamo l'array di libri per anno, poi per titolo se gli anni sono uguali
const libri = [
  { titolo: "Zeta", anno: 2010 },
  { titolo: "Alpha", anno: 2010 },
  { titolo: "Gamma", anno: 2005 },
];

libri.sort((a, b) =>
  // se anno è diverso - ordina per anno - ordina per titolo
  a.anno !== b.anno ? a.anno - b.anno : a.titolo.localeCompare(b.titolo)
);

//console.log(libri);

// metodo reduce

// reduce - riduce l'array a un singolo valore, accumulando i risultati a ogni iterazione

const transazioni = [
  { importo: 100, tipo: "entrata" },
  { importo: 50, tipo: "uscita" },
  { importo: 10, tipo: "uscita" },
  { importo: 200, tipo: "entrata" },
];

const riepilogo = transazioni.reduce(
  (riep, t) => {
    if (t.tipo === "entrata") riep.guadagni += t.importo;
    else riep.spese += t.importo;
    riep.saldo = riep.guadagni - riep.spese;
    return riep;
  },
  {
    saldo: 0,
    spese: 0,
    guadagni: 0,
  }
);

//const sommaNumeri = numeri.reduce((previous, current) => {
//  return (previous += current);
//}, 0);

//console.log(sommaNumeri);

// metodo flat

// flat - appiattisce l'array fino a un certo livello

const numeri = [1, [2, 3], [4, [5]]];

const numeriFlat = numeri.flat(1); // riduciamo di un livello la struttura annidata

//console.log(numeriFlat);

// metodo flatMap --> combina flat e map in un unico costrutto

const stringheAnnidate = [["ciao"], ["hello", "hi"]];

const trasformed = stringheAnnidate.flatMap((subarr) =>
  subarr.map((s) => s + "!")
);

//console.log(trasformed);

// --- //

const prodotti = [
  { categoria: "food", prezzo: 10, disponibile: true, tags: ["bio", "promo"] },
  { categoria: "tech", prezzo: 50, disponibile: false, tags: ["nuovo"] },
  {
    categoria: "food",
    prezzo: 20,
    disponibile: true,
    tags: ["bio", "offerta"],
  },
];

// filtriamo solo i prodotti disponibili
const avaiableProducts = prodotti.filter((prodotto) => prodotto.disponibile);

//console.log(avaiableProducts);

//ordinare per prezzo crescente
const productSorted = prodotti.map((p) => p.prezzo).sort((a, b) => a - b);

// se il valore restituito dal sort è negativo, a viene prima di b
// se il valore restituito dal sort è positivo, a viene dopo di b

//console.log(productSorted);

// somma totale dei prezzi

const totalPrice = prodotti.reduce((prev, curr) => {
  return (prev += curr.prezzo);
}, 0);

//console.log(totalPrice);

const studenti = [
  {
    nome: "Luca",
    corsi: [
      { nomeCorso: "Matematica", voto: 28 },
      { nomeCorso: "Storia", voto: 22 },
    ],
  },
  {
    nome: "Giulia",
    corsi: [
      { nomeCorso: "Matematica", voto: 18 },
      { nomeCorso: "Informatica", voto: 30 },
    ],
  },
  { nome: "Marco", corsi: [{ nomeCorso: "Informatica", voto: 25 }] },
];

// filtrare gli studenti che hanno almeno un corso con voto >= 18

const studentiPromossi = studenti.filter((studente) =>
  studente.corsi.some((c) => c.voto >= 18)
);

//console.log(studentiPromossi);

// esercizi di allenamento

const ordini = [
  {
    id: 1,
    importo: 120,
    prodotti: [
      { nome: "Maglia", prezzo: 20, tags: ["moda"] },
      { nome: "Pantaloni", prezzo: 40, tags: ["promo"] },
    ],
  },
  {
    id: 2,
    importo: 80,
    prodotti: [{ nome: "Scarpe", prezzo: 50, tags: ["nuovo"] }],
  },
  {
    id: 3,
    importo: 200,
    prodotti: [{ nome: "Cappotto", prezzo: 100, tags: ["moda", "inverno"] }],
  },
];

// filtrare ordini con importo superiore a 100
const ordiniGrandi = ordini.filter((ordine) => ordine.importo > 100);

console.log(ordiniGrandi);

//estrarre tutti i prezzi dei prodotti con flatMap
const prezziProdotti = ordini.flatMap((ordine) =>
  ordine.prodotti.map((p) => p.prezzo)
);

console.log(prezziProdotti);

// ordina i prezzi in ordine decrescente
const sortedPrices = prezziProdotti.sort((a, b) => b - a);

console.log(sortedPrices);

// sommiamo i prezzi con reduce
const total = sortedPrices.reduce((prev, current) => prev + current, 0);

console.log(total);

// troviamo il primo ordine che contiene un prodotto con tag inverno
const ordineInverno = ordini.find((ordine) =>
  ordine.prodotti.some((prodotto) => prodotto.tags.includes("inverno"))
);

console.log(ordineInverno);
