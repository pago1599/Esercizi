// esercizio 40

let user = {
  name: "Cosimo",
  age: 30,
};

let newUser = Object.assign({}, user);

newUser.name = "Paolo";

console.log(newUser);
console.log(user);

// esercizio 40.1

const smartphone = {
  brand: "Apple",
  name: "Iphone 13",
  price: 1300,
};

Object.freeze(smartphone);

smartphone.price = 100;

console.log(smartphone);
