"use strict";

// what is decorator => decorator is simply means provides us function, and with that function we can add some more functions inside this without changing perivious existed functions

// gives a function 
// returne a function

function decorator(func){
    return function(...arg){
        // console.log(...arg); // here i am getting arguments
        console.log("you are inside the decorator function",`and function name is ${func.name}`);
        func.call(this,...arg);
    }
}

function hello(myName){
    console.log("you are inside the hello function",myName);
}

hello("Jitendra Khadoliya");

// now what i do is i already created two functions are there and i will pass them inside an other function


const decoratedFunction = decorator(hello);

// here i am calling decoratedFunction here 
decoratedFunction("jitu","khadoliya");