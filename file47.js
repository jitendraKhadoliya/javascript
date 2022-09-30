"use strict";

//  hoisting


// // in the case of function declarition output is showing before declarlring function
//     hello();    
//     function hello(){
//     console.log("hello world");
//     }

//same in the case of function expression showing error 
// hello();
// const hello = function(){
//     console.log("hello world");
// }
// same in the case of arrow function  showing error 
// hello();
// const hello = () =>{
//     console.log("hello world");
// }


// what if we declare with different variables
console.log(hello);
// let hello = "hello world"; //showing error
var hello = "hello world"; //showing undefined
// const hello = "hello world"; //showing error
console.log(hello);