const prompt= require("prompt-sync")();

let velocity= prompt("Enter the velocity:");
    
   
    
let time=prompt("Enter the time:");
    

   let acce= prompt("Enter the acceleration:");
   

 let distance = (velocity*time) + ((acce*time*time)/2);


      
    

console.log(" The remaining distance  is ",distance);

    





