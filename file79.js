"use strict";

// more optimized way

const userMoreDetails = {
    about : function(){
        console.log(`your name is ${this.firstName} ${this.lastName} and your age is ${this.age}`)
    },
    checkIs18 :  function(){
        return this.age >=18;
    },
    favActor  : function(){
        return "my fav actor is : prabhas";
    } 
}
// now i don't want to create an new object location everytime
// so i will use proto feature here let's see how we can use proto here


const createUser = function(firstName,lastName,email,age,address){
    const user =Object.create(userMoreDetails
        )
    user.firstName = firstName,
    user.lastName = lastName,
    user.email = email,
    user.age = age;
    user.address =address;
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

console.log(user2.favActor());

console.log((user2.__proto__));

