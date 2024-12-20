// le callback sono funzioni passate come argomento di un altra funzione

/* function saluta(nome, callback) {
  console.log("Ciao " + nome);
  callback();
}

function fineSaluto() {
  console.log("La funzione di saluto è terminata");
}

saluta("Marco", fineSaluto);

function somma(a, b, callback) {
  const risultato = a + b;
  callback(risultato);
}

function mostraRisultato(risultato) {
  console.log("Risultato:" + risultato);
}

somma(5, 3, mostraRisultato);
console.log("Questo viene eseguito dopo la somma");

function eseguiOperazioni(a, b, cb1, cb2) {
  const somma = a + b;
  cb1(somma);
  const prodotto = a * b;
  cb2(prodotto);
}

console.log("Inizio del programma");

setTimeout(() => {
  console.log("Callback eseguita dopo 2 secondi");
}, 2000);

console.log("Fine del programma");

function processaOrdine(ordine, cb) {
  console.log("Elaborazione ordine: " + ordine);
  setTimeout(() => {
    console.log("Ordine elaborato con successo: " + ordine);
    cb();
  }, 3000);
}

console.log("Inizio del processo");

processaOrdine("Ordine #12345", () => {
  console.log("Invio notifica cliente completata");
});

function monitoraggioUptime({ success, error }) {
  let tentativo = 0;
  const maxTentativi = 5;

  const interval = setInterval(() => {
    tentativo++;
    const uptime = Math.random() > 0.2;
    console.log(
      `Verifica ${tentativo}: Server ${uptime ? "ONLINE" : "OFFLINE"}`
    );

    if (!uptime || tentativo === maxTentativi) {
      clearInterval(interval);
      console.log(
        uptime
          ? "Monitoraggio completato con successo"
          : "Attenzione: il server è offline!"
      );
      return uptime ? success() : error();
    }
  }, 3000);
}

const success = () => {
  console.log("Notifica stato healthy del sistema");
};
const error = () => {
  console.log("Notifica errore all'amministratore");
};
const callbacks = { success, error };
console.log("Avvio monitoraggio uptime del server...");
monitoraggioUptime(callbacks); */

// simuliamo un sistema di notifiche push che segnala l'arrivo di nuovi messaggi in una chat.
// creiamo una funzione notifica messaggi, che partendo da un array, simuli una chat e scriva ogni 2s nella console fino a quando sono presenti messaggi nell'array

const messaggi = [
  "Ciao come stai?",
  "Tutto bene tu?",
  "Tutto bene anche io, domani che fai?",
  "Esco e tu?",
  "Anche io! Incontriamoci in centro",
];

function nuoviMessaggi() {
  let index = 0;
  const interval = setInterval(() => {
    console.log(messaggi[index]);
    index++;
  }, 2000);
}

nuoviMessaggi();
