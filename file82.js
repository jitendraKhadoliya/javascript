"use strict";
// real example of creating prototype object inside function

// more optimized way

const createUser = function(firstName,lastName,email,age,address){
    const user =Object.create(createUser.prototype);
        user.firstName = firstName,
        user.lastName = lastName,
        user.email = email,
        user.age = age;
        user.address =address;
        return user;
    }

// here we will create prototype object inside the createUser function
createUser.prototype.about = function(){
    console.log(`your name is ${this.firstName} ${this.lastName} and your age is ${this.age}`)
    };
createUser.prototype.checkIs18 = function(){
    return this.age >=18;
    };
createUser.prototype.favActor = function(){
    return "my fav actor is : prabhas";
    };

    const user2 = createUser ("jitendra","khadoliya","jitendraKhadoliya@gmail.com",  24, "ward number 25,jhunjhunu");
const user3 = createUser ("ankitiya","khadoliya","jitendraKhadoliya@gmail.com",  14, "ward number 25,jhunjhunu");




user2.about();
console.log("age is 18+ ?:",user2.checkIs18());
