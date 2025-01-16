const user = {
  name: "Cosimo",
  age: 30,
};

const newUser = {};

for (let key in user) {
  newUser[key] = user[key];
}

newUser.name = "Paolo";

console.log(newUser);
console.log(user);
