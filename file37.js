"use strict";

//differnece between dot and bracket notaion

let key = "phoneNumber";
let key2 = "email";
const myFirstObject = {
    name:"jitendra",
    age:23,
    "my id" : 1,
    hobbies:["playing cricket","coding","meditation"]
};

// 1 difference is we can call keywords using bracket even if there is an space between there

// myFirstObject["age"];
console.log(myFirstObject["my id"]);

// 2 nd i can insert value using bracket 
myFirstObject[key] = 9889234359;
console.log(myFirstObject);


myFirstObject[key2] = "jitendrakhadoliya@gmail.com";
console.log(myFirstObject);

