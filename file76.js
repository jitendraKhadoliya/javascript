"use strict";

// short syntax for methods

// // normal way
// const user = {
//     firstName : "jit",
//     age : 3,

//     about : function(){
//             console.log(this.firstName,this.age);
//     }
// }
// user.about();


// now the shorter way
const user = {
    firstName : "jit",
    age : 3,
    about(){
        console.log(this.firstName,this.age);
    }
}
user.about();
// here we directly done this process