// esercizio 44

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(numbers[0]);
console.log(numbers.length);
console.log(numbers[9]);
console.log(numbers[20]);

// l'ultimo risultato in console è undefined in quanto, provando a stampare l'elemento dell'array con indice 20,
// JavaScript non trova nessuno elemento in quella posizione perchè le posizioni totali degli elementi di questo array sono 9.

// esercizio 45

const students = [
  {
    id: "Mario04",
    name: "Mario",
    surname: "Rossi",
    age: 20,
  },
  {
    id: "Fede99",
    name: "Federico",
    surname: "Bianchi",
    age: 25,
  },
  {
    id: "Sara94",
    name: "Sara",
    surname: "Neri",
    age: 30,
  },
];

console.log(students[0]);

// esercizio 45.1

for (let key in students) {
  console.log(students[key]);
}
