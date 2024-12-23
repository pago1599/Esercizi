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
