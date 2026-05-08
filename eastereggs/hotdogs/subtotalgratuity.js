const prompt= require("prompt-sync")();



const number1= prompt("enter the subtotal number")

 

const    number2= prompt("Enter the gratuity rate number:");
  
    
   rate = (number2 /10)+0.2;
  
  subtotal = number1 + rate;
  

 console.log("The answers are ",rate.toFixed(2),subtotal.toFixed(2));


