"use strict";
// if
// else if 
// else if 
// else if 
// else

// let myName = "jitendra khadoliya";
// let myAge =prompt("Enter Your Age");
// let tvCatagory;
// if(myAge<5){
//     tvCatagory = "cartoon";
// }else if(myAge<15){
//     tvCatagory = " movies";
// }else if(myAge < 22 ){
//     tvCatagory = "Web Series";
// }else{
//     tvCatagory = "Growing Mind Set";
// }
// console.log(`you age is "${myAge}" and your tv Catagory is " ${tvCatagory} "`);



// lets understand it with differnt example
let tempInDegree = prompt("Enter your Current temp");
if(tempInDegree <= -1){
    console.log("your current temp is in minus");
}else if(tempInDegree === 0){
    console.log("your current temp is zero");
}else if(tempInDegree <15){
    console.log("your current temp is still under 15 degree");
}
else if(tempInDegree <25){
    console.log("your current temp is OSM");
}
else if(tempInDegree <45){
    console.log("your current temp is getting hot");
}
else{
    console.log("your current temp is too hot");
}