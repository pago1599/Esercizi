const numeri = [1, 2, 3, 4, 5];

const [primo] = numeri; // const primo = numeri[0]

const user = {
  name: "Michele",
  age: "24",
  course: "FS33",
};

const { name, age, course } = user; // in una sola riga

console.log(name, age, course);

function stampa({ name, age, course, vote = 8 }) {
  // si può aggiungere e definire un'altra chiave all'interno della destrutturazione, anche se non è presente nell'oggetto

  console.log(
    `Benvenuto ${name} al corso ${course}, dove sei potuto accedere grazie ai tuoi ${age} anni e hai avuto un voto di ${vote}`
  );
}

stampa(user);
