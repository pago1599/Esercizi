const data = { name: "John", age: 30 };

function fetchDataFromAPI(callback) {
  console.log(`Recupero dati in corso...`);
  setTimeout(() => {
    callback(data);
  }, 2000);
}

function handleData(data) {
  console.log(`Dati recuperati con successo: ` + JSON.stringify(data));
}
fetchDataFromAPI(handleData);
