"use strict";
// object
// Object are referce data type
// arrays are good but not sufficient for real world data
// objects store key value pairs
// objects don't have index



// how to create objects
// we create objects using {} littlrals

// const myFirstObject = {name:"jitendra",age:23};
const myFirstObject = {
    name:"jitendra",
    age:23,
    hobbies:["playing cricket","coding","meditation"]
};


// how to access data from objects
// console.log(myFirstObject);
// console.log(myFirstObject.hobbies);
console.log(myFirstObject["hobbies"]);
// console.log(myFirstObject.name);

//  how to add key value pair to objects
myFirstObject.gender = "male";
// console.log(myFirstObject);


// now trying to push inside the object of array
myFirstObject.hobbies.push("vollyball");
console.log(myFirstObject.hobbies);