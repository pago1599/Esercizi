// esercizo 31

function sayHelloName(callback) {
  setTimeout(function () {
    console.log("Hello");
    callback();
  }, 1000);
}

// esercizo 31.1

let printName = function () {
  setTimeout(function () {
    console.log("Fabio");
  }, 1000);
};

sayHelloName(printName);
