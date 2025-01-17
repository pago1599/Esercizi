/* Crea la tua To-Do List mediante i metodi visti nel video.
Crea una funzione che ti permetterà di:
Creare una lista aggiungendo il task desiderato mediante il bottone Aggiungi.
Creare un checkbox per ogni task aggiunto.
 */

const addProduct = () => {
  const ul = document.querySelector(`#list`);
  const input = document.querySelector(`input`);
  const li = document.createElement(`li`);
  const value = input.value;

  ul.style.listStyle = `none`;

  li.innerHTML = `<input type="checkbox" /> ${value}`;

  input.value = ``;

  ul.appendChild(li);
};
