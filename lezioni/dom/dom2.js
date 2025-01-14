const $description = document.querySelector(`#description p`);

// modifica del contenuto HTML interno dell'elemento - innerHTML
$description.innerHTML = `Contenuto modificato`;

// modifica del testo di un elemento - textContent o innerText
document.querySelector(`#description p`).textContent;
document.querySelector(`#description p`).innerText;

// leggere e modificare gli attributi - getAttribute() e setAttribute()
document.querySelector(`#description p`).getAttribute(`title`);
document
  .querySelector(`#description p`)
  .setAttribute(`id`, `paragrafo descrizione`);

// rimuovere gli attributi - removeAttribute()
document.querySelector(`#description p`).removeAttribute(`title`);

// modificare gli stili CSS tramite JavaScript - .style
document.querySelector(`#description p`).style.color = `red`;
document.querySelector(`#description p`).style.backroundColor = `green`;

// modifica e lettura delle classi CSS - .classList

// aggiunta di una nuova classe - add()
document.querySelector(`#description`).classList.add(`nuova-classe`);

// rimozione di una classe - remove()
document.querySelector(`#description`).classList.remove(`nuova-classe`);

// alternare una classe - toggle()
document.querySelector(`#description`).classList.toggle(`nuova-classe`);

// verificare se la classe esiste - contains()
document.querySelector(`#description`).classList.contains(`nuova-classe`);
