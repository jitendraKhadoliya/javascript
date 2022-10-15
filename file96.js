"use strict";
// detail processs in my notes
// global execution phase
console.log( "hello world");
let firstName ="jitendra";
let lastName = "khadoliya";

const myFunction = function(){
    let var1 = "first variable";
    let var2 = "second variable";
    console.log(var1);
    console.log(var2);
}

// function execution phase

let foo = "foo";
console.log(foo);

function getFullName(firstName,lastName) {
    console.log(arguments);
    let myVar = "var inside the function";
    console.log(myVar);
    const fullName = firstName + " " + lastName;
    return fullName;
}

const personName = getFullName("jitendra","khadoliya");
console.log(personName); 
