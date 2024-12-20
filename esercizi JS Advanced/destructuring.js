// esercizio 1

const person = {
  name: "Alice",
  age: 30,
};

//const { name, age } = person;

//console.log(name);
//console.log(age);

// esercizio 2

const student = {
  info: { name: "Bob", age: 25 },
  grades: { math: 95, science: 89 },
};

const {
  info: { name, age },
  grades: { math, science },
} = student;

console.log(name);
console.log(age);
console.log(math);
console.log(science);

// esercizio 3

const colors = ["red", "green", "blue"];

const [firstColor, secondColor, thirdColor] = colors;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);

// esercizio 4

let a = 5;
let b = 10;

[a, b] = [b, a];

console.log(a, b);
