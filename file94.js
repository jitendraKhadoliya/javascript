"use strict";
// javaScript in function expression using var

console.log(this);
console.log(window);
console.log(myFunction); // it will show undefined because function now storing value in variable
console.log(fullName);


// function declration
// function myFunction(){
//     console.log( "this is my function");
// }
// changing into function expression
var myFunction = function(){
    console.log("this is my function");
}

var firstName = "jitendra";
var lastName = "khadolliya";
var fullName = firstName + " " + lastName;
console.log(fullName);