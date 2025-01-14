/* Stampa in ordine in console:

l'elemento padre di ul.
il secondo elemento figlio di ul.
l'elemento fratello successivo del secondo li.
l'elemento fratello precedente del secondo li.
Il tutto utilizzando tutte e 4 le proprietà viste nel video. */

const ul = document.querySelector(`ul`);
console.log(ul.parentElement);

const secondLi = ul.children[1];
console.log(secondLi.innerHTML);

const nextLi = secondLi.nextElementSibling;
console.log(nextLi.innerHTML);

const previousLi = secondLi.previousElementSibling;
console.log(previousLi.innerHTML);
