// rest e spread operator

// rest parameter - raccoglie i valori di un array

function somma(...numeri) {
  // ... --> rest parameter - in queto caso, significa tutti i numeri
  return numeri.reduce((acc, n) => acc + n, 0);
}

console.log(somma(1, 4, 3, 7));
console.log(somma(1, 4, 3, 7, 9, 12, 43, 22));
console.log(somma(6, 89));

function logMessaggi(prefix, ...messaggi) {
  messaggi.forEach((msg) => console.log(prefix, msg));
}

logMessaggi(
  "INFO",
  "Inizio",
  "Processo in corso",
  "Processo fallito",
  "Processo completato"
);

const [primo, ...altri] = [10, 20, 30, 40, 50];

console.log(primo);
console.log(altri);

function concatena(sep, ...strings) {
  return strings.join(sep);
}

console.log(concatena("-", "a", "b", "c"));

// spread operator

const numeri = [1, 2, 3];

console.log(Math.max(...numeri)); // spread espande i valori dell'array

const array1 = [1, 2];
const array2 = [3, 4];

const arrayUniti = [...array1, ...array2];

console.log(arrayUniti);

function sommaFiltrata(filtro, ...numbers) {
  return numbers.filter(filtro).reduce((acc, n) => acc + n, 0);
}

const filterPari = (n) => n % 2 === 0;
const totale = sommaFiltrata(filterPari, 1, 2, 3, 4, 5, 6);

console.log(totale);
