"use strict";
// arrow function in methods

// here we saw arrow function don't have "this " keyword it takes from sroundding that is window

const user = {
    firstName : "jit",
    age : 3,

    about : ()=>{
        // console.log(this);
        console.log(this.firstName,this.age);
    }
}
user.about();//undefined