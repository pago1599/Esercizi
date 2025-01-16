const newDiv = document.createElement(`div`);
newDiv.textContent = `Sono un nuovo div`;

// appendChild - inserisce il nuovo nodo come figlio di un nodo già esistente
document.body.appendChild(newDiv);

// removeChild - rimuove elemento dal nodo genitore
document.body.removeChild(newDiv);

// insertBefore - inserisce un elemento prima di un altro elemento figlio
document.body.insertBefore(newDiv, document.querySelector(`container`));

// replaceChild - sostituisce un elemento figlio con un altro elemento
const oldItem = document.querySelector(`li:first-child`);
const newListItem = document.createElement(`li`);
newListItem.textContent = `Nuovo elemento lista`;
document.body.replaceChild(newListItem, oldItem);

// cloneNode - crea una copia di un elemento
const originalDiv = document.querySelector(`.original`);
const cloneDiv = originalDiv.cloneNode(true);
document.body.appendChild(cloneDiv);

// insertAdjacentHTML - inserisce del contenuto HTML in una posizione specifica rispetto all'elemento
// possibili valori della position - beforebegin, afterbegin, beforeend, afterend
const section = document.querySelector(`.section`);
section.insertAdjacentHTML(`beforebegin`, `<h2>Nuova sezione</h2>`);

//outerHTML - restituisce l'HTML esterno del selettore
