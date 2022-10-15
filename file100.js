"use strict";
// closures
// using closures effect write an function about cube

// function myFunction(power ) {
//     return function(number) {
//         return number ** power;
//     }
// }
// shorter way 
// const myFunction = (power) => (number) =>  number ** power ;
const myFunction = (power) => {return (number) => {
    return number ** power
} };



const cube = myFunction(2);
const ans = cube(3);
console.log(ans);

// fully expained in notes