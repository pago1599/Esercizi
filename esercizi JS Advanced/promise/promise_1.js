const data = { name: "John", age: 30 };

function fetchDataFromAPI() {
  return new Promise((resolve, reject) => {
    console.log(`Recupero dati in corso...`);
    setTimeout(() => {
      const isSuccess = Math.random() > 0.2; // simula un successo (80%) o un errore (20%)
      if (isSuccess) {
        resolve(data); // risolve la promise con i dati
      } else {
        const error = `Errore durante il recupero dati`;
        reject(error); // rifiuta la promise con un messaggio di errore
      }
    }, 2000);
  });
}

fetchDataFromAPI()
  .then((data) => {
    console.log(`Dati recuperati con successo: ` + JSON.stringify(data));
  })
  .catch((error) => {
    console.log(error);
  });
