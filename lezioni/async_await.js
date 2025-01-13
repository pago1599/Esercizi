/* async function attendi() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`attendi completato`);
    }, 2000);
  });
}

async function main() {
  console.log(`main avviato`);
  const message = await attendi();
  console.log(message);
  console.log(`main finito`);
} */

//main();

/* async function fetchData() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const json = await data.json();
  console.log(json);
}
 */
//fetchData();

/* function launchFetch() {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((data) => data.json())
    .then((result) => console.log(result));
} */

//launchFetch();

/* async function fetchUserData() {
  try {
    const response = await fetch(`https://www.nonesistequestourlweb.com/boh`);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(`Failed to fetch user data`, error);
  }
} */

//fetchUserData();

// IIFE - Immediately Invoked Function Expression - dichiarazione e invocazione di una funzione asincrona in un unico blocco

/* (async () => {
  const users = await fetchUsers();
  console.log(users);
})(); */

async function getContent() {
  return "contenuto segreto";
}

async function test() {
  const content = await getContent();
  return "qualcosa" + "-" + content;
}

async function test2() {
  const content = await getContent();
  return "qualcosa di nuovo" + "-" + content;
}

test() // pending
  .then(test2) // fullfilled
  .then((msg) => console.log(msg)) // fullfiilled
  .catch((error) => console.log(error)); //rejected

(async () => {
  const message1 = await test();
  const message2 = await test2();
  console.log(message1, message2);
})();
