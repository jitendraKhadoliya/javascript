"use strict";
// function inside function

const func = () => {
// creating second function simpley
function hello() {
    console.log("hello worlf");
}

// creating second function using arrow
const additionOfTwo = (num1,num2)=>{let sum = num1+num2;return sum}
// creating third function using expression

const mul = function(num1,num2){
    let multi = num1*  num2;
    console.log(multi);
}

    console.log("inside the function");
    hello();
   console.log( additionOfTwo(4,3)); 
   mul(4,3);
}

func();
// we can't call nested function outside the main function