"use strict";

// spread operator in Object

// in privious chapters we leared about spread operators in arrays let's recall it first then we will learn these speard operator in onject
// reall in array 

// const arrayName1 = [1,2,3,4];
// const arrayName2 = [5,6,7,8];
// const arrayName3 = [...arrayName1,...arrayName2,23,432,"jitu"]
// console.log(arrayName3);

// const arrayName4 = [..."234432"];
// console.log(arrayName4);

// now let's understand spread operator in object
const obj1 = {
    name : "jitu",
    favGame : "coding",
    favMovie : "gowing mindset"
};
const obj2 = {
    name2 : "ankit",
    favGame2 : "GTA",
    favMovie2 : "gowing mindset"
};


// be aware while declaring keys in objects should not the same keys if it is then privious key will be replaced by the new keys
const obj3 = {...obj1 , ...obj2}
// const obj3 = {..."abcdefghij"};
console.log(obj3);
// console.log(obj3[5]);
