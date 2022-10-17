"use strict";
// change text using javaScript
// interview important
// textContent and innerText

const mainHeading = document.getElementById("main-heading");
// here we declared heading in variable
console.log(mainHeading.textContent);
console.log(mainHeading.innerText);
mainHeading.textContent = "trying something new";
console.log(mainHeading.textContent);

// mainHeading.innerText = "trying something new";
console.log(mainHeading.innerText);