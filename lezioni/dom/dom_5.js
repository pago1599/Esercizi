// Web Storage
// localStorage - memorizza i dati senza scadenza
// sessionStorage - memorizza i dati solo per la durata della sessione del browser

// metodi principali

// setItem(key, value) - aggiunge un elemento allo Storage
// localStorage.setItem(`username`, `Fabio -Artudi`);

// getItem(key) - recupera un elemento dallo Storage
// const username = localStorage.getItem(`username`);

// removeItem(key) - rimuove un elemento dallo Storage
// localStorage.removeItem(`username`);

// clear() - cancella tutto il contenuto dello Storage

const users = [
  {
    username: `fabio`,
    password: `fabio`,
  },
  {
    username: `andrea`,
    password: `andrea`,
  },
  {
    username: `camillo`,
    password: `camillo`,
  },
  {
    username: `michele`,
    password: `michele`,
  },
];

const $form = document.querySelector(`#login`);
const $output = document.querySelector(`#output`);
const $protectedContent = document.querySelector(`#protected`);
const $usernameInput = document.querySelector(`#username`);
const $passwordInput = document.querySelector(`#password`);
const $disconnet = document.querySelector(`#disconnect`);

function login(username, password) {
  return users.some(
    ({ username: u, password: p }) => u === username && p === password
  );
}

function showProtectedContent() {
  $form.style.display = `none`;
  $protectedContent.style.display = `block`;
}

function hideProtectedContent() {
  $form.style.display = `block`;
  $protectedContent.style.display = `none`;
}

if (localStorage.getItem(`userLogged`) === `1`) {
  showProtectedContent();
}

$form.addEventListener(`submit`, function (e) {
  e.preventDefault();

  const logged = login($usernameInput.value, $passwordInput.value);

  if (!logged) {
    $output.textContent = `Credenziali non valide`;
    return;
  }

  localStorage.setItem(`userLogged`, 1);
  showProtectedContent();
});

$disconnet.addEventListener(`click`, function () {
  localStorage.removeItem(`userLogged`);
  hideProtectedContent();
});

// fetch(url, {}).then(r => r.JSON()).then(data => console.log(data)).catch(error => console.log(error))

// Metodi HTTP di comunicazione tra client e server
// GET - recupera dati dal server
// POST - invia dati al server
// PUT - aggiorna dati esistenti sul server
// DELETE - elimina dati dal server

fetch("urlserver", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: {
    username: "clara",
    password: "clara",
  },
}).then();

// JSON

// JSON.stringify(json) - converte un dato rappresentandolo sotto forma di stringa JSON
console.log(JSON.stringify(users));

// JSON.parse(json) - converte una stringa JSON nel dato originale
