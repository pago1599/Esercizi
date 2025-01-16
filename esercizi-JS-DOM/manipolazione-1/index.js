/* Crea la tua To-Do List mediante i metodi visti nel video.
Crea una funzione che ti permetterà di:
Creare una lista aggiungendo il task desiderato mediante il bottone Aggiungi.
Creare un checkbox per ogni task aggiunto.
 */

const ul = document.querySelector(`#list`);
const input = document.querySelector(`input`);

const addProduct = () => {
  const li = document.createElement(`li`);
  const value = input.value;

  li.innerHTML = `<input type="checkbox" />${value}`;

  input.value = ``;

  ul.appendChild(li);
};
