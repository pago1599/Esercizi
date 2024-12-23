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
