 "use strict";

//  fill method
// value , start , end

// const myArr = new Array(10).fill(-1);
// console.log(myArr);

const myArray = [1,2,3,4,5,6,7,8,9];
// now we want to replace 3,4,5 with value 1
// let's do it

const ans = myArray.fill(1,2,5);
console.log(ans);