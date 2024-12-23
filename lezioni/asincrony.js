// asincronia in javascript

// setTimeout --> esegue una callback dopo un intervallo

/* const timer = setTimeout(() => {
  console.log("Questo messaggio appare dopo almeno 2 secondi"); // event loop
}, 2000);

console.log("setTimeout in attesa..."); 

clearTimeout(timer); */

// setInterval --> esegue una callback dopo ogni intervallo

/* let i = 0;
const timer = setInterval(() => {
  console.log("Questo codice si esegue ogni secondo ma si ferma dopo 3");
  i++;
  if (i === 3) clearInterval(timer);
}, 1000);

console.log("Dopo il setInterval");
 */

/* const items = [];

const timer = setInterval(() => {
  if (items.length > 0) {
    console.log("Processo l'item " + items[0]);
    items.pop();
  }
}, 1000);

setTimeout(() => {
  items.push("Ciao");
}, 2000); */

/* setTimeout(() => {
  console.log("Ciao");
  setTimeout(() => {
    console.log("Come stai?");
  }, 3000);
}, 2000); */

/* let count = 1;

const intervalId = setInterval(() => {
  console.log(count);
  if (count >= 5) {
    clearInterval(intervalId);
  } else {
    count++;
  }
}, 1000); */

function ripeti(callback, delay, volte) {
  let esecuzioni = 0;

  function esegui() {
    callback(); // se questo impiega più tempo, il setTimeout ritarda
    esecuzioni++;
    if (esecuzioni < volte) {
      setTimeout(esegui, delay);
    }
  }
  setTimeout(esegui, delay);
}

ripeti(
  () => {
    console.log("Messaggio ricorsivo");
  },
  1000,
  3
);
