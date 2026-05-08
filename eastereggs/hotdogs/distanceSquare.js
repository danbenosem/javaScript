const prompt= require("prompt-sync")();




 
   
    let num1=  prompt("Enter the value of x1 :");
    
   
    let num2= prompt("Enter the value of y1:");

    
  let num3= prompt("Enter the value of x2:");

  
   let num4= prompt("Enter the value of y2:");

 let distance = (Math.pow(Math.pow((num3-num1),2),0.5) +  Math.pow((num4-num2),2))/ Math.pow(Math.pow((num3-num1),2) +  Math.pow((num4-num2),2),0.5);


      
    

console.log(" The distance  is ",distance);

    





