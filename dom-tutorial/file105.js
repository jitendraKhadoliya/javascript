"use strict";
// change text using javaScript
// interview important
// textContent and innerText

const mainHeading = document.getElementById("main-heading");
// here we declared heading in variable
console.log(mainHeading.textContent); //here with textContent i am getting full line with hidden
console.log(mainHeading.innerText);
//here with innerText i am getting only value that is not hidden
console.log(mainHeading.textContent);
mainHeading.textContent = "trying something new";
console.log(mainHeading.textContent);

// mainHeading.innerText = "trying something new";
console.log(mainHeading.innerText);