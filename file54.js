"use strict";

// callback function

function myFunc(name) {
    console.log("inside my func");
    console.log(`inside your name is ${name}`);
}

function myFunc2(callback) {
    console.log("iside the my Func 2");
    callback("khadoliya");
    
}

// myFunc(myFunc2());
myFunc2(myFunc);

function func1(name1) {
    console.log("inside the new func1");
    console.log("inside the new name1",{name1});
}

function func2(callback) {
    console.log("inside the new func2");
    console.log("inside the new name1");
    callback("jitendra");
}

func2(func1);