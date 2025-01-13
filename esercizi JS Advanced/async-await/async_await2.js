function caricaModulo(modulo) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Il modulo ${modulo} è stato caricato.`);
    }, 2000);
  });
}

async function lanciaVeicoloSpaziale() {
  console.log(`Preparazione al lancio del veicolo spaziale...`);

  const caricaModuloA = await caricaModulo(`A`);
  console.log(caricaModuloA);

  const caricaModuloB = await caricaModulo(`B`);
  console.log(caricaModuloB);

  const caricaModuloC = await caricaModulo(`C`);
  console.log(caricaModuloC);

  console.log(`Veicolo spaziale pronto per il lancio!`);
}

lanciaVeicoloSpaziale();
