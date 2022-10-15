"use strict";

// lexical enviroment, scope chain
// if any variable didn't find in local memory then it will checck parent memory and take that value from there

const lastName = "khadoliya";


const printName = function () {
    const firstName = "jitendra";
    console.log(firstName);
    console.log(lastName);
}
 printName();