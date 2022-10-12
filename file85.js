"use strict";
// more about prototype

function hello(){
    console.log("hello");
}
console.log(hello.prototype);
//here we seen prototype normally stays in object

// now what we will do is we will check in array

const arr = [1,2,3];

console.log(Object.getPrototypeOf(arr));
// here we saw prototype can be in array Form 
console.log( Array.prototype);
console.log( arr);

// we can create own prototype
hello.prototype = [];
console.log(hello.prototype);
// can add whatever value we want to add 
hello.prototype.push(1,2,3,4);
console.log( hello.prototype);
