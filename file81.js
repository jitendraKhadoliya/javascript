"use strict";
// let's understand prototype
// what is prototype
// prototpe is an emepty Object that is given by a function 
// note - > only functions can give prototype

// javaScript function ===> function + object

function hello(){
    console.log("hello world");
}
hello.prototype.key1 = "this is the prototype value of function hello";
hello.prototype.arr = [1,2,3];
hello.prototype.sing = function (params) {
    return "lalalala";
}
// we can't use prototype in anything except functions
// const hello = {};
// const hello = [];

// hello();
// console.log(hello.name);
console.log( hello.prototype.key1);
console.log( hello.prototype);
console.log( hello.prototype.sing());

// only function provides prototype values
if(hello.prototype){
    console.log("yes prototype is available");
}else
console.log("noo!!! prototype is available");