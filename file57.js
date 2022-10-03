 "use strict";

 // map method 
// map function is like for each loop but it creates new array let's see how it works

const numbers = [32,43,45,64];

// function decalre
// function square (number) {
//    return number*number;
// }

// function expression
// const square = function(number){
//     return number*number;
// }

// function arrow
// const square = (number) => {
//     return number*number;
// }


// const answer = numbers.map(square);
// console.log(answer);

// we can do this in one line
// const myAns = numbers.map(function square(number){
//     return number * number ;
// })
// console.log(myAns);

// what if i use arrow function there 
// let square = [];
// const myAns = numbers.map(square =(numbers) => {
//     return numbers*numbers;
// } )
// console.log(myAns);
// let's do more short
// const myAns = numbers.map((numbers) => {
//     return numbers*numbers;
// }); 
// console.log(myAns);


// let's do realstic example
const users = [
    {firstName : "jitendra",age:23},
    {firstName : "ankit",age:21},
    {firstName : "punit",age:20}
]

const returnedValue = users.map(function accesNames(name){
    return name.firstName;
});
console.log(returnedValue);