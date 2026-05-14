const prompt = require("prompt-sync")();

const input= prompt("enter number:")

if (input%2==0){

    console.log("Even number")
}

else if (input % 2==1){


    console.log("Odd number")
}
