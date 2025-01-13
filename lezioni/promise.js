// cos'è una Promise ?
// è un oggetto che rappresenta il completamento o il fallimento di un'operazione asincrona
// una Promise può avere 3 stati:
// - Pending: la Promise è in attesa di essere completata
// - Fulfilled: Operazione completata con successo
// - Rejected: Operazione fallita

const promise = new Promise((resolve, reject) => {
  const success = true;
  if (success) resolve("Operazione completata");
  else reject("Operazione fallita");
});

// invocare una promise
promise
  .then((message) => {
    // cosa farà la promise in caso di successo
    // console.log(message);
  })
  .catch((error) => {
    // cosa farà la promise in caso di fallimento
    // console.log(error);
  });

function getUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.5;
      if (success) {
        resolve({ id: 1, name: "Alice" });
      } else {
        reject("Errore durante la richiesta");
      }
    }, 1000);
  });
}

// Promise chaining

function getOrders(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["Order 1", "Order 2", "Order 3"]);
    }, 1000);
  });
}

getUser()
  .then((user) => {
    console.log(user);
    return getOrders(user.id);
  })
  .then((orders) => {
    console.log("Ordini ricevuti", orders);
  })
  .catch((error) => console.log(error))
  .finally(() => {
    console.log("Promise completata in generale");
  });

// callbak vs promise
// più difficile da leggere e mantenere vs più leggibile e gestibile
// callback hell vs possibilità di chaining
// non ha gestione di errori centralizzata vs .chatch() per la gestione degli errori

// riscriviamo le funzioni annidate di callbacks_errors.js usando le promise
function getUserSession() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const sessionId = 12345;
      const isError = Math.random() < 0.2;
      if (isError) reject();
      resolve(sessionId);
    }, 1000);
  });
}

function getCart(sessionId) {
  return new Promise((resolve) => {
    const carrello = [
      {
        nome: "Prodotto 1",
      },
      {
        nome: "Prodotto 2",
      },
      {
        nome: "Prodotto 3",
      },
    ];
    setTimeout(() => {
      resolve({ sessionId, cart: carrello });
    }, 1000);
  });
}

function getPrices({ sessionId, cart }) {
  return new Promise((resolve) => {
    const mappedCart = cart.map((prodotto) => {
      return {
        ...prodotto,
        price: Math.random() * 10,
      };
    });
    setTimeout(() => {
      resolve({ sessionId, cart: mappedCart });
    }, 1000);
  });
}

function placeOrder(cart) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const paymentSucced = Math.random() > 0.5;
      if (paymentSucced) {
        resolve({ orderId: "987654321", ...cart });
      }
      reject(cart);
    }, 1000);
  });
}

getUserSession()
  .catch(() => {
    console.log(`Errore durante la creazione della tua sessione`);
  })
  .then(getCart)
  .then(getPrices)
  .then(placeOrder)
  .then((order) => {
    console.log(`Ordine effettuato con successo`, order);
  })
  .catch((cart) => {
    console.log(`Si è verificato un problema`, cart);
  });

// le API delle Promise
// Promise.all() - Promise.race() - Promise.allSettled() - Promise.any()

// Promise.all() consente di eseguire più Promise in parallelo e ottenere i risultati quando tutte sono state risolte

const promise1 = Promise.resolve(`Promessa 1 completata`);
const promise2 = new Promise((resolve) =>
  setTimeout(resolve, 1000`Promessa 2 completata`)
);
const promise3 = Promise.resolve(`Promessa 3 completata`);

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});

// Promise.race restituisce qualsiasi Promise che viene eseguita per prima, anche se rifiutata

const promiseA = new Promise((resolve) =>
  setTimeout(resolve, 2000, `Promessa A completata`)
);
const promiseB = new Promise((resolve) =>
  setTimeout(resolve, 2000, `Promessa B completata`)
);

Promise.race([promiseA, promiseB]).then((value) => {
  console.log(value);
});

// Promise.allSettled() restituisce un array di oggetti che descrivono lo stato di tutte le Promise, indipendentemente dal fatto che siano risolte o rifiutate

const promiseX = Promise.resolve(`Promessa X completata`);
const promiseY = Promise.reject(`Promessa Y completata`);

Promise.allSettled([promiseX, promiseY]).then((results) => {
  console.log(results);
});

// Promise.any() restituisce il risultato della prima Promise che viene risolta, ignorando quelle rifiutate

const promiseAlpha = Promise.reject(`Promessa Alpha fallita`);
const promiseBeta = new Promise((resolve) =>
  setTimeout(resolve, 1500, `Promessa Beta completata`)
);

Promise.any([promiseAlpha, promiseBeta])
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });
