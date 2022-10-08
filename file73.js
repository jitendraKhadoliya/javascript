"use strict";
// call apply bind


function  about(hobby , favstar){
    console.log(this.firstName,this.age,hobby,favstar);
}


const person = {
    firstName : "jitendra",
    age : 24 ,
}
const person2 = {
    firstName : "jitu",
    age : 22 ,
}
const person3 = {
    firstName : "ankit",
    age : 20 ,
}

// person.about.call(person);
// in call function we need to declare "this" keyword
// what location "this" keyword will use we need to declare it first for using call function

about.call(person,"playing cricket","pranhass");
about.call(person2,["playing cricket","pranhass"] ); //if we try to declare both parameters in array then it will take only one argument other one will not be added
// this is the difference between call and apply

// here we have created funcion outside of the object now we are calling directly using call keyword for call keyword we need to declare the value of "this" keyword inside the box

about.apply(person3,["playing cricket","pranhass"] );
// apply is very similar to call function but here is the catch we can declare the arguments direcly in string for both the perameters

const newFunc = about.bind(person3,"playing cricket","pranhass" );
const newFunc2 = about.bind(person3,["playing cricket","pranhass" ]);
newFunc();
// in bind keywoord it will create new function all simiar to call keywords
newFunc2();
// bind will not work as apply keyword
