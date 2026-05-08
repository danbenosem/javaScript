const prompt=require("prompt-sync")();

const number = prompt("enter the length of the side:")

 
  
   area = (Math.sqrt(3)/4)*(number*number) ;

    volume = area * number;

console.log("the answer is ", volume.toFixed(2))

 
