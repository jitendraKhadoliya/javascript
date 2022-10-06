"use strict";
// iterables and array like objects
// iterables -> we can use for of loop inside iterables
// strings,array are iterables

// let's understand it with the help of example
const str = "jitendra";
for(let char of str){
    console.log(char);
};
// array are also iterables
const users = ["jitu","ankit","punit"];
for(let user of users){
    console.log(user);
};


// array like Object
// in array like Object we can run length property
// we can acesss from index
// example-> String
const str2 = "jitendra";
console.log(str2.length);
console.log(str2[3]);



