"use strict";

let myElements = document.querySelectorAll("li a"); //nodelist
// let myElements = document.getElementsByTagName("a"); //html collection
console.log(myElements);

// simple for loop 
// for of loop
// foreach

for(let i=0; i<myElements.length; i++){
    const myElement = myElements[i];
    myElement.style.backgroundColor = "yellow";
    myElement.style.fontWeight = "bold";
    myElement.style.color = "red";
}

// for(let myElement of myElements ){
    //     myElement.style.backgroundColor = "yellow";
    //     myElement.style.fontWeight = "bold";
    //     myElement.style.color = "red";
    //     // navItems.style.backgroundColor= "black";
    // }

    // making array here
    myElements = Array.from(myElements);
    console.log(myElements);

// myElements.forEach((myElement)=>{
//     myElement.style.backgroundColor = "yellow";
//         myElement.style.fontWeight = "bold";
//         myElement.style.color = "red";
// })

    


// myElements.forEach(element => {
    
// });


// console.log(myAllElements);