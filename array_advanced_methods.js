// esercizio 1

/* const persons = [
  { name: "Paul", age: 16 },
  { name: "George", age: 17 },
  { name: "Lucas", age: 21 },
  { name: "Marco", age: 32 },
  { name: "Peter", age: 18 },
  { name: "Carl", age: 13 },
  { name: "Simon", age: 24 },
  { name: "Mark", age: 15 },
  { name: "Sandra", age: 34 },
  { name: "Alice", age: 28 },
];

const adults = persons.filter((person) => person.age >= 18);
console.log(persons);
console.log(adults);

// esercizio 2

function firstUncompletedNote(notes) {
  return notes.find((note) => note.todos.some((todo) => todo.done === false));
}
// altra opzione
function firstUncompletedNote(notes) {
  return notes.find((note) => note.todos.filter((todo) => !todo.done).length);
}  

const notes = [
  {
    id: 1,
    description: "Workout program",
    todos: [
      {
        id: 1,
        name: "Push ups - 10 x 3",
        done: true,
      },
      {
        id: 2,
        name: "Abdominals - 20 x 3",
        done: true,
      },
      {
        id: 3,
        name: "Tapis Roulant - 15min",
        done: true,
      },
    ],
  },
  {
    id: 2,
    description: "Front-end Roadmap",
    todos: [
      {
        id: 1,
        name: "Learn HTML",
        done: true,
      },
      {
        id: 2,
        name: "Learn CSS",
        done: false,
      },
      {
        id: 3,
        name: "Learn JavaScript",
        done: true,
      },
      {
        id: 4,
        name: "Learn Angular",
        done: false,
      },
    ],
  },
  {
    id: 3,
    description: "My Movies Library",
    todos: [
      {
        id: 1,
        name: "La città incantata",
        done: true,
      },
      {
        id: 2,
        name: "Avatar",
        done: true,
      },
      {
        id: 3,
        name: "Titanic",
        done: false,
      },
    ],
  },
];

const noteInProgress = firstUncompletedNote(notes);
console.log("All notes: ", notes);
console.log("First note in progress: ", noteInProgress);

// esercizio 3

const fruits = ["Mela", "Banana", "Kiwi", "Fragola"];

fruits.forEach(function (fruit) {
  console.log(fruit + "!");
});

// esercizio 4

const persons = [
  { name: "Paul", age: 16 },
  { name: "George", age: 17 },
  { name: "Lucas", age: 21 },
  { name: "Marco", age: 32 },
  { name: "Peter", age: 18 },
  { name: "Carl", age: 13 },
  { name: "Simon", age: 24 },
  { name: "Mark", age: 15 },
  { name: "Sandra", age: 34 },
  { name: "Alice", age: 28 },
];

const nicknames = persons.map((person) => {
  return person.name + "-" + person.age;
});

console.log(persons);
console.log(nicknames); 

// esercizio 5

function calculateAverageAge(persons) {
  const averageAge = persons.reduce(
    (average, person) => average + person.age,
    0
  );
  return averageAge / persons.length;
}

const persons = [
  { name: "Paul", age: 16 },
  { name: "George", age: 17 },
  { name: "Lucas", age: 21 },
  { name: "Marco", age: 32 },
  { name: "Peter", age: 18 },
  { name: "Carl", age: 13 },
  { name: "Simon", age: 24 },
  { name: "Mark", age: 15 },
  { name: "Sandra", age: 34 },
  { name: "Alice", age: 28 },
];

const average = calculateAverageAge(persons);
console.log(persons);
console.log(average); */

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
