// esercizio 36

function canPlay() {
  let sport = " Football";
  if (true) {
    let personName = "Cosimo";
    console.log(personName + sport);
  }
}

canPlay();

// la funzione originale dava errore in console in quanto la dichiarazione e assegnazione delle due variabili avevano scope diversi (erano su livelli differnti) rispetto al console.log, quindi al momento di stampare una variabile era undefined.

// esercizio 36.1

let sport = " Football";
function canPlay() {
  if (true) {
    let personName = "Cosimo";
    console.log(personName + sport);
  }
}
canPlay();
