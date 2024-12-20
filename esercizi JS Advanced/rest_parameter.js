// esercizio 1

function somma(...numeri) {
  return numeri.reduce((acc, number) => acc + number, 0);
}

const sommaTotale = somma(1, 2, 3, 4, 5, 6, 7, 8, 9);

console.log(sommaTotale);

// esercizio 2

function filterOutOdds(...numbers) {
  return numbers.filter((number) => number % 2 === 0);
}

const oddNumbers = filterOutOdds(1, 2, 3, 4, 5, 6, 7, 8, 9);

console.log(oddNumbers);
