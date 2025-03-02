function caricamentoDati() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Questi sono i dati ottenuti dalla fonte asincrona.");
    }, 2000);
  });
}

async function ottieniDati() {
  try {
    const data = await caricamentoDati();
    return data;
  } catch (error) {
    console.log(`Errore nel caricamento dati`);
  }
}

ottieniDati().then((data) => {
  console.log(data);
});
