// esercizio 1

function visualizzaOrologio() {
  const orarioCorrente = new Date();
  const ore = orarioCorrente.getHours();
  const minuti = orarioCorrente.getMinutes();
  const secondi = orarioCorrente.getSeconds();

  console.log(`Ora attuale: ${ore}:${minuti}:${secondi}`);
}

setInterval(visualizzaOrologio, 1000);

// esercizio 2

let tempoRimanente = 10;

console.log(`Conto alla rovescia in corso...`);

function contoAllaRovescia() {
  if (tempoRimanente > 0) {
    console.log(`Tempo rimanente: ${tempoRimanente} secondi`);
    tempoRimanente--;
  } else {
    console.log(`Il conto alla rovescia è terminato`);
    clearInterval(timer);
  }
}

const timer = setInterval(contoAllaRovescia, 1000);

// esercizio 3

console.log("Il promemoria è in fase di impostazione");

function mostraPromemoria() {
  console.log("Promemoria: È ora di fare una pausa!");
}

setTimeout(mostraPromemoria, 5000);

// esercizio 4

function lanciaDadi() {
  console.log("Lancio dei dadi in corso...");
  setTimeout(() => {
    const dado1 = Math.floor(Math.random() * 6) + 1;
    const dado2 = Math.floor(Math.random() * 6) + 1;
    console.log(`Lancio dei dadi: Dado 1 = ${dado1}, Dado 2 = ${dado2}`);
  }, 2000);
}

lanciaDadi();
