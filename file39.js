"use strict";

// computed properties

 
const key1 = "name";

const key2 = "age" ;

const value1 = "jitendra";
const value2 = 23;

const obj = {

}

// adding functionality using bracket notation
obj[key1] = value1;
console.log(obj);

// adding functionality using . keyword it will add key2 directly

// obj.key2 = value2;
// console.log(obj);


obj[key2] = value2;
console.log(obj);