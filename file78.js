"use strict";
// in last file77 new object was created everytime so here we can do refernce for that we will use new function here for refernce

// here we are creating extra object
const userMoreDetails = {
    about : function(){
        console.log(`your name is ${this.firstName} ${this.lastName} and your age is ${this.age}`)
    },
    checkIs18 :  function(){
        return this.age >=18;
    }   
}

const createUser = function(firstName,lastName,email,age,address){
    const user ={};
    user.firstName = firstName,
    user.lastName = lastName,
    user.email = email,
    user.age = age;
    user.address =address;
    user.about = userMoreDetails.about;
    user.checkIs18 = userMoreDetails.checkIs18;
    return user;
}
const user2 = createUser ("jitendra","khadoliya","jitendraKhadoliya@gmail.com",  24, "ward number 25,jhunjhunu");
const user3 = createUser ("ankitiya","khadoliya","jitendraKhadoliya@gmail.com",  14, "ward number 25,jhunjhunu");

console.log(user2);
user2.about();
console.log(user2.checkIs18());

user3.about();
console.log(`is ${user3.firstName} age is 18
+ =  `,user3.checkIs18());
