function Smartphone(brand, name, price) {
  this.brand = brand;
  this.name = name;
  this.price = price;
}

const device1 = new Smartphone("Apple", "Iphone 15 Pro", 1200);

const device2 = new Smartphone("Samsung", "Galaxy S24", 800);

const device3 = new Smartphone("Google", "Pixel 9 Pro", 1400);

console.log(device1);
console.log(device2);
console.log(device3);
