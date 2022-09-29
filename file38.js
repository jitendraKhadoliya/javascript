"use strict";
// how to iterate objects

const person = {
    name : "jitendra",
    age: 23,
    hobbies : ["coding","vollyball","cricket"]
}

// console.log(person.name);

// method 1 : for in loop 
// method 2 : for Object.keys

// for(let key in person){
    // console.log(key ," : " , person[key]);
    // console.log(`${key}  : ${person[key]}` );
// }

// method 2 for Object.keys
// console.log(Object.keys(person));
// const arr = Array.isArray(Object.keys(person));
// console.log(arr);

for(let key of Object.keys(person)){
    // console.log(`${key} : ${person[key]}`);
    console.log( key , ":" , person[key]);
}