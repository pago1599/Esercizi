function filterOutOdds(...numbers) {
  return numbers.filter((number) => number % 2 === 0);
}

const oddNumbers = filterOutOdds(1, 2, 3, 4, 5, 6, 7, 8, 9);

console.log(oddNumbers);
