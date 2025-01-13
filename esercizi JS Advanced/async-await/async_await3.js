function caricaModulo(modulo) {
  return new Promise((resolve, reject) => {
    const tempoCaricamento = Math.random() * 3000; // Simula il caricamento con un ritardo casuale fino a 3 secondi.
    setTimeout(() => {
      if (tempoCaricamento < 1500) {
        resolve(`Il modulo ${modulo} è stato caricato.`);
      } else {
        reject(`Errore durante il caricamento del modulo ${modulo}.`);
      }
    }, tempoCaricamento);
  });
}

async function lanciaVeicoloSpaziale() {
  console.log(`Preparazione al lancio del veicolo spaziale...`);

  try {
    const caricaModuloA = await caricaModulo(`A`);
    console.log(caricaModuloA);

    const caricaModuloB = await caricaModulo(`B`);
    console.log(caricaModuloB);

    const caricaModuloC = await caricaModulo(`C`);
    console.log(caricaModuloC);
  } catch (error) {
    console.log(error);
    console.error(
      `Impossibile lanciare il veicolo spaziale a causa di errori nei moduli.`
    );
    return;
  }

  console.log(`Veicolo spaziale pronto per il lancio!`);
}

lanciaVeicoloSpaziale();
