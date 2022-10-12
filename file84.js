"use strict";
// wanting to print keys

const CreateUser = function(firstName,lastName,email,age,address){
    this.firstName = firstName,
    this.lastName = lastName,
    this.email = email,
    this.age = age;
    this.address =address;
}

// here we will create prototype object inside the createUser function
CreateUser.prototype.about = function(){
console.log(`your name is ${this.firstName} ${this.lastName} and your age is ${this.age}`)
};
CreateUser.prototype.checkIs18 = function(){
return this.age >=18;
};
CreateUser.prototype.favActor = function(){
return "my fav actor is : prabhas";
};

const user2 = new CreateUser ("jitendra","khadoliya","jitendraKhadoliya@gmail.com",  24, "ward number 25,jhunjhunu");
const user3 = new CreateUser ("ankitiya","khadoliya","jitendraKhadoliya@gmail.com",  14, "ward number 25,jhunjhunu");


// user2.about();
// console.log("age is 18+ ?:",user2.checkIs18());

// we want keys of object
for(let key in user2){
    // console.log(key); //for all key
    // what if we want only keys that are only persent in function not in prototype
    if(user2.hasOwnProperty(key)){
        console.log(key);
    }
}

