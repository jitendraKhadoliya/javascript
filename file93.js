"use strict";
// hoisting
console.log(this);
console.log(window);
console.log(myFunction);
console.log(fullName);

function myFunction(){
    console.log( "this is my function");
}

var firstName = "jitendra";
var lastName = "khadolliya";
var fullName = firstName + " " + lastName;
console.log(fullName);