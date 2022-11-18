"use strict";

//cloning arrays

//concatenate arrays

let arrName1 = ["jitendra", "ankit"];
let arrName3 = ["buli","ram"];

// now i want to clone it 
// method 1 : slice oprator
// let arrName2 = arrName1.slice();
// for concatenate
// let arrName2 = arrName1.slice().concat(arrName3);


// method 2 : concatenate operator
let arrName2 = arrName1.concat();


// method 3 : spread operator
// let arrName2 = [...arrName1,...arrName3];



console.log(arrName1 === arrName2); //checking whether array is same or not if true then same false then differnt cloned 
arrName1.push("punit");
console.log(arrName1);

console.log(arrName2);

const arr = [1,2,3];

// let arr2 = [...arr];
// const arr2 = [];
// arr2.push(arr);
// const arr2 = arr.slice(0).concat(21);
const arr2 = [].concat(arr,23.231);
arr2.push(21);
arr2.unshift(21);
const inc =  arr2.includes(1);
console.log(inc);
console.log(arr2);
let[myalue1 , myvalue2 , myalue3 , myalue4 ,...myalue5] = arr2;
console.log( "value1",myalue1);
console.log(myvalue2);
console.log(myalue3);
console.log(myalue4);
console.log("spread", myalue5);


let str = "jitendra khadoliya";
// let str2= str.slice(2,4);
let str2= str.split("t");
 console.log(str2);
 const arr3 = ["dlajlai"];
 const sprd = [...arr2,"khfds",...arr3];
 console.log(sprd);
 for (let i = 0; i < sprd.length; i++) {
    const element = sprd[i];
    console.log(element);
 }

 const obj = {
    name : "jitu",
    age : 23,
    height : "190",
 }

 let {name, ...age} = obj;
 const obj2 = {
    
 }
 console.log( obj.age);
 
//  console.log(name,age);