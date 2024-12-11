// `` --> template strings (option + \);

const nome = "Manuel";

const esempio = `Ciao ${nome} sei dentro template string`;

//console.log(esempio);

const prodotto = "Scarpe";
const prezzo = 129;

const descrizione = `Il prodotto ${prodotto} costa ${prezzo}`;

//console.log(descrizione);

const numero1 = 5;
const numero2 = 10;

function stampaNumero() {
  return 25;
}
const risultato = `La somma tra ${numero1} e ${numero2} è ${
  numero1 + numero2
} e ${stampaNumero()}`;

//console.log(risultato);

const messaggio = `Questa stringa
è scritta su più righe
grazie alle template string.`;

//console.log(messaggio);

const html = `
<div>
    <h1>Titolo</h1>
    <p>Paragrafo</p>
</div>
`;

//console.log(html);

function getSectionHTML(title, description) {
  return `
<div class="test">
    <h1>${title}</h1>
    <p>${description}</p>
</div>
`;
}

console.log(getSectionHTML("La mia storia", "Ciao sono Fabio nato a Oristano"));
