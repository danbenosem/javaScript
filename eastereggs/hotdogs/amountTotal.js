const prompt= require("prompt-sync")();

let velocity = prompt("Enter the velocity :");

   
    let principal  = prompt("Enter the principal amount:");
   let rate =0.003125;
    
  

  
 let amount  = principal * Math.pow( 1+ (rate/12),6);


      
    

console.log(" The account value  is %f%n",amount);

    





   
