const prompt = require("prompt-sync")();



const numberChecker= function (number){

    if (number<0){

        return "Even number"
    }

    else if (number>0){


        return "Odd number"
    }
     else{
       return "zero"
    }

}

const number= prompt("enter number:")
num= numberChecker(number)

console.log(num)
