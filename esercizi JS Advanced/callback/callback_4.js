function runCallbacks(callbacks) {
  callbacks.forEach((callback) => callback());
}

function firstCallback() {
  console.log("Questa è la prima callback");
}
function secondCallback() {
  console.log("Questa è la seconda callback");
}

function thirdCallback() {
  console.log("Questo è la terza callback");
}
const callbackArray = [firstCallback, secondCallback, thirdCallback];
runCallbacks(callbackArray);
