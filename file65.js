"use strict";
// splice method
// start , insert , delete

// first we will do insertion
const myArr = [ "jitendra", "ankit","punit"];
// deleted item always returns an value

// const deletdItem = myArr.splice(2,1);
// console.log(deletdItem);
// console.log(myArr);


// now let's see how we can insert an item
console.log(myArr);
myArr.splice(1,0,"jitu");
console.log(myArr);

// want to delete punit and enter punni
myArr.splice(3,1,"punni");
console.log(myArr);


 