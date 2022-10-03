"use strict";
// function expression


// Pattern
// variable declare function's name = function name(params) {
   // enter your code here 
// }

// small example:-

const additionOfTwo = function(num1,num2) {
    var sum = num1 + num2;
    console.log(sum);
    // return sum;
}

// calling function here
additionOfTwo(2,4);


// new function expression
// funstion expression
const isEven = function (number){
    // another short trick
    return number % 2 === 0;

    // if (number % 2 === 0){
        // return true; 
    // }
        // return false;
}
console.log(isEven(21));

