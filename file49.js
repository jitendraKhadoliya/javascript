"use strict";

// lexical scope
// lexical scope chain
// lexical scope is basically checking enviornment,if we call any variable inside the function in javaScript then first it will check own function if variable is not found in that function then it will check the perent function and so on.... and in last it will check the global function if he didn't found there then will show error otherwise it will call that variable 

// this is lexical enviornment




// example creating a function
const myVar = "value1";
function myFunc(){
   // now creating a new function myFunc2() using function expression inside new function
    const myFunc2 = function(){
        // now creating a new function myfun3() using function arrow

        const myFunc3 = () => {

            console.log("inside the myFunc3",myVar);
        }
        
        const myVar = "value20";
        console.log("inside the function2", myVar);
        myFunc3();
    }
    // printing myFac function
    console.log("inside the myFunc",myVar);
    myFunc2();

    
}

myFunc();