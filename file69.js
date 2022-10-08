"use strict";
// clone using object asign
// in object memory stores in heep


const obj = {key1 : "value1",key2 : "value2"};
// adding something in object

// const obj2 = {...obj};
const obj2 = Object.assign({},obj);
obj.key3 = "value3";
console.log(obj); 
console.log(obj2); 