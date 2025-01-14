/* Cerca tutti gli elementi con classe "paragrafo".
Cerca l' elemento con id "elemento-3"
Cerca tutti gli elementi h2 della pagina */

const paragrafi = document.getElementsByClassName(`paragrafo`);
console.log(paragrafi);

const elemento3 = document.getElementById(`elemento-3`);
console.log(elemento3);

const allH2 = document.querySelectorAll(`h2`);
console.log(allH2);
