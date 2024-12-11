// esercizio 47

const names = ["Luca", "Marco", "Vittorio", "Giovanni"];

names.pop();
console.log(names);

names.push("Pippo");
console.log(names);

names.unshift("Giovanni");
console.log(names);

// esercizio 47.1

console.log(names.join(" - "));

// esercizio 47.2

const students = [
  { id: 1, name: "Luca", surname: "Rossi", age: 20 },
  { id: 2, name: "Mario", surname: "Bianchi", age: 24 },
  { id: 3, name: "Giovanni", surname: "Brambilla", age: 30 },
];

students.pop();
console.log(students);

students.push({ id: 3, name: "Francesco", surname: "Verdi", age: 41 });
console.log(students);
