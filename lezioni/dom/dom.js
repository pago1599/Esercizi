document.title = `Document Object Model`;

// selezionare un elemento in base al suo id - getElementById()
//const $title = document.getElementById(`titolo`);

// selezionare tutti gli elementi con una specifica classe - getElementByClassName()
const $allBold = document.getElementsByClassName(`bold`);

// selezionare tutti gli elementi di un determinato tag - getElementByName()
const $allParagraphs = document.getElementsByTagName(`p`);

// selezionare il primo o tutti gli elementi di un determinato selettore - querySelector() e querySelectorAll()
const $title = document.querySelector(`#titolo`);
const $bolds = document.querySelectorAll(`.bold`);
const $paragraphs = document.querySelectorAll(`p`);

// proprietà principali per navigare tra i nodi

// selezionare e restituire il nodo padre - parentNode
// restituire una lista di tutti i nodi figli - childNodes
// restituire il primo nodo figlio - firstChild
// restituire l'ultimo nodo figlio - lastChild
// restituire il nodo successivo nello stesso livello - nextSibling o nextElementSibling per intero nodo
// restituire il nodo precedente nello stesso livello - previousSibling o previousElementSibling per intero nodo

const paragrafi = [`Questo è un paragrafo`, `Questo è un altro paragrafo`];
paragrafi.forEach((p) => {
  document.querySelector(`.paragrafi`).innerHTML += `<p>` + p + `</p>`;
});
