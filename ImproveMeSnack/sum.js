
const prompt = require("prompt-sync")();
function addTwoNumbers() {
  
  let num1 = Number(prompt("Enter the first number:"));
  let num2 = Number( prompt("Enter the second number:"));
  
  
  
  let sum = num1 + num2;

  console.log("The sum is: " + sum);
}

addTwoNumbers(); 
