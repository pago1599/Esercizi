/* Cerca tutti gli elementi con classe "paragrafo".
Cerca l' elemento con id "elemento-3"
Cerca tutti gli elementi h2 della pagina */

const paragraphs = document.getElementsByClassName(`paragrafo`);
console.log(paragraphs);

const element3 = document.getElementById(`elemento-3`);
console.log(element3);

const allH2 = document.querySelectorAll(`h2`);
console.log(allH2);
