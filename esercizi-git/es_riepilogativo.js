// esercizio riepilogativo

const studenti = [
  { nome: "Alice", voto: 95 },
  { nome: "Bob", voto: 88 },
  { nome: "Carol", voto: 76 },
  { nome: "David", voto: 92 },
  { nome: "Eve", voto: 84 },
];

// stampiamo i nomi degli studenti
console.log("Nomi degli studenti:");
studenti.forEach((studente) => {
  console.log(studente.nome);
});

// troviamo uno studente con voto superiore a 90
const studenteVotoAlto = studenti.find((studente) => studente.voto > 90);
console.log("Studente con voto superiore a 90:");
console.log(studenteVotoAlto);

// calcoliamo la media dei voti degli studenti
const sommaVoti = studenti.reduce((acc, studente) => acc + studente.voto, 0);
const mediaVoti = sommaVoti / studenti.length;
console.log("Media dei voti degli studenti:", mediaVoti);

// creiamo un nuovo array con i nomi degli studenti in maiuscolo
const nomiMaiuscolo = studenti.map((studente) => studente.nome.toUpperCase());
console.log("Nomi degli studenti in maiuscolo:");
console.log(nomiMaiuscolo);

// troviamo gli studenti con voti superiori a 85
const studentiVotoAlto = studenti.filter((studente) => studente.voto > 85);
console.log("Studenti con voto superiore a 85:");
console.log(studentiVotoAlto);
