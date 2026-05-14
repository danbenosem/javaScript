const prompt = require("prompt-sync")();

const score= prompt("what is the score?")


const scoreCard= function (score){

if(score > 70){

   return "A"
}
 
if(score >=60 && score <70){

   return "B"
}

if(score >=50 && score <60){

   return "C"
}


if(score >=40 && score <50){

   return "D"
}

if(score <40){

   return "F"
}




}


console.log(scoreCard(score))
