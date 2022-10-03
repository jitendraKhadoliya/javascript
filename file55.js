 "use strict";

//  function returning functions

// creating an function
function myFanc(){
    // return function myFanc2(){
        // return "welcome inside the game of coding";
    // }
    // same thing writting in different style
    const myFanc2 = () => {return "returning myfanc2";}
    return myFanc2;
}

const ans = myFanc();
console.log(ans());