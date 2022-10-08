"use strict";
// optional chaining
// in optional chanining we use question mark dot ?. it will check first value if it's not defined then it will show undefined and will not execute more

const user ={
    firstName : "jitendra",
    // address : {wardNumber : 25}
}
console.log(user?.firstName);
console.log(user?.address?.wardNumber);