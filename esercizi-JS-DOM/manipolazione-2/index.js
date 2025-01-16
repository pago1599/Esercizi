/* Implementare il codice necessario per:

Recuperare il valore di ciascun campo di input e creare un oggetto person contenente le proprietà: firstName, lastName e age.
Infine recuperare l'elemento form e aggiungere l'attributo data-person contenente l'oggetto person in formato json. */

const form = document.querySelector(`form`);

const firstNamedId = document.getElementById(`firstName`);
const lastNamedId = document.getElementById(`lastName`);
const ageId = document.getElementById(`age`);

const firstName = firstNamedId.value;
const lastName = lastNamedId.value;
const age = ageId.value;

const person = { firstName, lastName, age };
let jsonPerson = JSON.stringify(person);

form.setAttribute(`dara-person`, jsonPerson);
