function delayTwoSeconds() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Operazione completata dopo 2 secondi`);
    }, 2000);
  });
}

delayTwoSeconds()
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(`Si è verificato un errore:`, error);
  });
