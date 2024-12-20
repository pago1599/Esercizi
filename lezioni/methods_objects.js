// un metodo è una funzione che è una proprietà di un oggetto, i metodi permettono agli oggetti di avere comportamenti oltre ai dati.

const user = {
  name: "Fabio",
  surname: "Artudi",
  welcome() {
    console.log("Ciao, mi chiamo " + this.name + " " + this.surname);
  },
};

user.welcome();

// creiamo un oggetto calcolatrice con i metodi delle operaioni matematiche.

const calcolatrice = {
  somma(a, b) {
    console.log(a + b);
  },
  sottrazione(a, b) {
    console.log(a - b);
  },
  moltiplicazione(a, b) {
    console.log(a * b);
  },
  divisione(a, b) {
    console.log(a / b);
  },
};

calcolatrice.somma(1, 5); // 6
calcolatrice.sottrazione(7, 2); // 5
calcolatrice.moltiplicazione(3, 4); // 12
calcolatrice.divisione(10, 2); // 5

// creiamo un oggetto banca, che abbia oggetti annidati per ogni cliente, dove ogni cliente può gestire il suo saldo, prelevare e depositare.

const banca = {
  nome: "Banca centrale",
  cliente: {
    nome: "Fabio Artudi",
    saldo: 20000,
    deposita(importo) {
      this.saldo += importo; // this.saldo = this.saldo + importo
      console.log(
        "Hai depositato " + importo + "euro. Saldo attuale: " + this.saldo
      );
    },
    preleva(importo) {
      if (importo <= this.saldo) {
        this.saldo -= importo;
        console.log(
          "Hai prelevato " + importo + "euro. Saldo attuale: " + this.saldo
        );
      } else {
        console.log("Impossibile prelevare, vai a lavorare.");
      }
    },
  },
};

banca.cliente.deposita(2000);
banca.cliente.preleva(3000);

// una funzione costruttrice è una funzione utilizzata per creare nuovi oggetti, convenzionalmente le funzioni costruttrici iniziano con una lettera maiuscola.
// si utilizza la parola chiave "new" per creare una nuova istanza dell'oggetto.

function Persona(name, surname) {
  //lettera maiuscola nome funzione = funzione costruttrice
  this.name = name;
  this.surname = surname;
  this.welcome = function () {
    console.log("Ciao mi chiamo " + this.name + " " + this.surname);
  };
}

class PersonaClass {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  welcome() {
    console.log(
      "Ciao mi chiamo " +
        this.name +
        " " +
        this.surname +
        " e sto studiano Javascript, lo amo"
    );
  }
}

const persona3 = new Persona("Giuseppe", "Di Loreto");

const persona1 = new Persona("Manuel", "Lomaglio");
const persona2 = new Persona("Clara", "Massaro");

persona1.welcome();
persona2.welcome();
persona3.welcome();

// prodotti di un e-commerce

function Product(name, price) {
  this.name = name;
  this.price = price;
}

// array

const products = [
  new Product("Scarpe Nike", 120),
  new Product("Felpa Adidas", 40),
];

console.log(products);
