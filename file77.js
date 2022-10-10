"use strict";

// create function to create multiple object

// this is normal Object
const user1 = {
    firstName : "jitendra",
    lastName : "khadoliya",
    email : "jitendraKhadoliya@gmail.com",
    age : 24,
    address : "ward number 25,jhunjhunu",
    about : function(){
        console.log(`your name is ${this.firstName} ${this.lastName} and your age is ${this.age}`)
    },
    checkIs18 : function(){
        return this.age >=18;
    }
}
console.log(user1);
user1.about();
const checking = user1.checkIs18();
console.log(checking);

// we can't do this for many user1 we have more simple process let's see what is it
// first we will create an function 

const createUser = function(firstName,lastName,email,age,address){
    const user ={};
    user.firstName = firstName,
    user.lastName = lastName,
    user.email = email,
    user.age = age;
    user.address =address;
    user.about = function(){
        console.log(`your name is ${this.firstName} ${this.lastName} and your age is ${this.age}`)
    }
    user.checkIs18 = function(){
        return this.age >=18;
    }   
    return user;
}

const user2 = createUser ("jitendra","khadoliya","jitendraKhadoliya@gmail.com",  4, "ward number 25,jhunjhunu");

console.log(user2);
user2.about();
const chk = user2.checkIs18();
console.log(chk);

// still there are many mistakes we will sort them
