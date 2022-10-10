"use strict";
// use of proto

// proto property,proto chain
// Object.create(__proto__)

// here we are creating one object

const user = {
    data1 : "value1",
    data2 : "value2"
}
    // const user2 =  {};
    // user2.data3 = "value3";
    // there is an another way through we can create object
    const user2 = Object.create(user);
    user2.data3 = "value3";
    // user2.data2 = "value4";
    

// console.log(user2);
console.log(user2.data2);
// here javaScript first check user2 if he didn't find anything then it will check user

console.log(user2.__proto__);

// here __proto__ and [[prototype]] both are similar

// offical ecma script shows [[prototype]]

// but but but [[prototype]] and prototype both are differnt