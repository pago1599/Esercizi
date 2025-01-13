/* function fetchData(callback) {
  setTimeout(() => {
    const error = Math.random() > 0.5;
    if (error) {
      callback("Errore durante il recupero dei dati", null);
    } else {
      callback(null, "Dati recuperati con successo");
    }
  }, 1000);
}

function handleData(error, data) {
  if (error) {
    console.log("Errore: ", error);
  } else {
    console.log("Successo: ", data);
  }
}

fetchData(handleData);

// errori nelle callbacks

function logCompletion(step) {
  console.log("Step completato: " + step);
}

 setTimeout(() => {
  logCompletion("Operazione 1");
  setTimeout(() => {
    logCompletion("Operazione 2");
    setTimeout(() => {
      logCompletion("Operazione 3");
    }, 1000);
  }, 1000);
}, 1000); 

function operation1(next = null) {
  console.log("Operazione 1 completata");
  setTimeout(() => {
    next();
  }, 1000);
}

function operation2(next = null) {
  console.log("Operazione 2 completata");
  setTimeout(() => {
    next();
  }, 1000);
}

function operation3(next = null) {
  console.log("Operazione 3 completata");
}

operation1(() => {
  operation2(() => {
    operation3();
  });
}); */

// costruiamo insieme un caso di callbacks annidate
// una funzione che recupera la sessione corrente dell'utente, restituendo un ID o un possibile errore durante il recupero
// una funzione getCart, che grazie all'ID ricevuto, può recuperare il carrello dell'utente, che è un array di oggetti contenente i prodotti, e restituire il tutto alla prossima callback
// una funzione getPrices che modifica il carrello ricevuto da getCart, aggiungendo i prezzi ai prodotti (come se fossero richiesti in tempo reale) e restituisce tutto alla prossima callback
// una funzione placeOrder che acquista il carrello, simulando il pagamento, con possibile scenario di fallimento
// effettuiamo le operazione in ordine e stampiamo il risultato finale dell'oggetto che contiene sessione e carrello con i prezzi

function getUserSession(cb, error) {
  setTimeout(() => {
    const sessionId = 12345;
    const isError = Math.random() < 0.2;
    if (isError) {
      error();
      return;
    }
    cb(sessionId);
  }, 1000);
}

function getCart(id, callback) {
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
    callback({ sessionId, cart: carrello });
  }, 1000);
}

function getPrices({ sessionId, cart }, callback) {
  const mappedCart = cart.map((prodotto) => {
    return {
      ...prodotto,
      price: Math.random() * 10,
    };
  });
  setTimeout(() => {
    callback({ sessionId, cart: mappedCart });
  }, 1000);
}

function placeOrder(cart, success, error) {
  const paymentSucced = Math.random() > 0.2;
  setTimeout(() => {
    if (paymentSucced) {
      return success({ orderId: "987654321", ...cart });
    } else {
      return error(cart);
    }
  }, 1000);
}

getUserSession(
  (sessionId) => {
    getCart(sessionId, (cart) => {
      getPrices(cart, (cart) => {
        placeOrder(
          cart,
          (order) => {
            console.log("Ordine effettuato con successo", order);
          },
          (cart) => {
            console.log("'Si è verificato un problema", cart);
          }
        );
      });
    });
  },
  () => {
    console.log("Errore durante la creazione della tua sessione");
  }
);
