 "use strict";
//  methods
// functions inside object

// this keyword -> this keyword exects the value in whole object


function aboutInfo(){
    console.log(`the value of firstName is = "${this.firstName}" and their age is = " ${this.age} "`);
}

const person = {
    firstName : "jitendra",
    age : 24,
    about: aboutInfo
}
// here about checks the value of aboutinfo, aboutinfo is the function already declared when it checks about info then it find "this" keyword and "this" means what object we are working on and from using this keyword we can access all this data from that perticluar object
const person2 = {
    firstName : "punit",
    age : 18,
    about: aboutInfo
}
const person3 = {
    firstName : "ankit",
    age : 14,
    about: aboutInfo
}
const person4 = {
    firstName : "rishi",
    age : 44,
    about: aboutInfo
}
console.log(person.firstName);
person.about();
person2.about();
person3.about();