function performOperation(a, b, callback) {
  if (typeof a !== `number` || typeof b !== `number`) {
    callback(new Error(`Il valore forinto non è un numero`));
    return;
  }
  const result = a + b;
  callback(result);
}

function displayResult(result) {
  console.log("Il risultato è: ", result);
}

performOperation(5, null, displayResult);
