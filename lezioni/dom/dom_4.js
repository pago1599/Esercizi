// 15.01.2025
const $button = document.querySelector(`#myButton`);

// aggiungere eventi tramite proprietà del nodo
// sostituisce o aggiunge un singolo evento, non può registrare funzioni multiple sullo stesso evento

$button.onClick = function () {
  alert(`Hai cliccato il pulsante`);
};

$button.onClick = function () {
  alert(`Adesso carico il contenuto`); // verrà eseguita questa
};

// registrare eventi tramite listener
$button.addEventListener(`click`, function () {
  alert(`Hai cliccato il pulsante`);
});

const alertCb = function () {
  alert(`Adesso carico il contenuto`);
};

$button.addEventListener(`click`, alertCb);
$button.removeEventListener(`click`, alertCb);

$text = document.querySelector(`#text`);

$text.addEventListener(`mouseover`, function () {
  $text.style.color = `red`;
});
$text.addEventListener(`mouseout`, function () {
  $text.style.color = `black`;
});

const $inputField = document.querySelector(`#inputField`);
const $output = document.querySelector(`#output`);

$inputField.addEventListener(`keyup`, function (event) {
  console.log(event);
  $output.textContent = `Hai scritto: ${$inputField.value}`;
});

// 16.01.2025

const $form = document.querySelector(`#myForm`);
const $message = document.querySelector(`#message`);
const $privacy = document.querySelector(`#privacy`);
const $error = document.querySelector(`#error`);
const $fruits = document.querySelector(`#fruits`);

const fruits = {
  banana: 2,
  mela: 0,
  arancia: 3,
};

function getDefaultOptionHTML() {
  return `<option value="0">Scegli il frutto da acquistare</option>`;
}

function getOptionHTML(fruit) {
  return `<option value="${fruit}">${fruit}</option>`;
}

function getOptionsHTML(fruits) {
  let html = ``;
  Object.keys(fruits).forEach((fruit) => {
    html += getOptionsHTML(fruit);
  });
  return html;
}

function updateSelectOptions($fruits, fruits) {
  $fruits.innerHTML = getDefaultOptionHTML();
  $fruits.innerHTML = getOptionsHTML(fruits);
}

function isAvailable(fruit, fruits) {
  return fruit in fruits && fruits[fruit] > 0;
}

function updateErrorMessage(message) {
  $error.textContent = message;
}

updateSelectOptions($fruits, fruits);

$fruits.addEventListener("change", function () {
  if ($fruits.value === "0") {
    $message.textContent = "";
    return;
  }
  updateErrorMessage("");
  if (!isAvailable($fruits.value, fruits)) {
    updateErrorMessage($fruits.value + " non è acquistabile al momento");
    return;
  }
  $message.textContent = `Stai acquistando ${$fruits.value}`;
});

$privacy.addEventListener("change", function () {
  $error.textContent = $privacy.checked ? "" : $error.textContent;
});

$form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (!$privacy.checked) {
    $error.textContent =
      "Devi accettare la privacy per poter inviare questo form!";
    return;
  }

  if ($fruits.value === "0") {
    updateErrorMessage("Devi selezionare almeno un frutto");
    return;
  }

  if (!isAvailable($fruits.value, fruits)) {
    updateErrorMessage($fruits.value + " non è acquistabile al momento");
    return;
  }

  $message.textContent = "Form inviato con successo!";
});
