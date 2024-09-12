const prompt = require("prompt-sync")();

// Write - Your - Code

function getNumber() {
  let number = prompt("Enter a number: ");
  return number;
}

console.log(getNumber());