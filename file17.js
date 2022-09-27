  "use strict";

// nasted if else

// question logic
// design a prompt game where shows three results 
// winning number = 24;
// if number is right then show it 
// if number is low then show it 
// if number is high then show it 

let winningNumber = 24;
let userGuessNumber = +prompt("Guess the number");
console.log("your Guess number is :- " + typeof userGuessNumber, userGuessNumber);
// userGuessNumber =  +userGuessNumber ;
// userGuessNumber = Number(userGuessNumber);
// console.log(typeof userGuessNumber,userGuessNumber);
if(userGuessNumber == 24){
    console.log("you Guessing number is right");
}else{
    // console.log("your Guessing number is wrong");
    if(userGuessNumber > 24){
        console.log("your Guessing number is too HIGH !!!");
    }else{
        console.log("your Guessing number is too LOW !!!");
    }
}