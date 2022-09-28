"use strict";

// for loop in arrays

let fruits = ["apple","banana","grapes","mango"];
// let arrName1 = console.log( fruits.concat());
// console.log(fruits[fruits.length-1]);

let newString = [] ;
for(let i =0; i< fruits.length; i++ ){
    // to show how many variables are there
    // console.log([i]);
    
    // to show how many variables name
    // console.log(fruits[i]);

    // to change variable into uppercase
    console.log(fruits[i].toUpperCase());

    // pushing into new arrays
     newString.push(fruits[i].toUpperCase());


    }
    console.log(newString);


console.log(newString===fruits);