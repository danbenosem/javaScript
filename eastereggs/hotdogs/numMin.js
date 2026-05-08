const prompt= require("prompt-sync")();

const number= prompt("Enter the time in minutes")

  
    // 525,600 minutes makes a year , a year is 365 days ,a day is 1440minutes

let year = number/525600;


 let leftover_minutes=0;

if (year>1){
  leftover_minutes= number-(year*525600);


}else {
 leftover_minutes= number - (year*525600);
}

let days= leftover_minutes/1440;

      
    

console.log(`The remaining time is ${year} years and ${days} days`);

