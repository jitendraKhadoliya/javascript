"use strict";
// function destructring
// use->
// in Object
// in react

const person = {
    firstName : "jitendra",
    lastName : "khadoliya"
}

// function func(obj) {
// console.log(obj.firstName);
// console.log(obj.lastName);
// }
// func(person);

function func({firstName,lastName}) {
console.log(firstName);
console.log(lastName);
}
func(person);