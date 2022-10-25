"use strict";
// get and set attribute


// finding first ancker tag attribute
const link = document.querySelector("a");
console.log(link);
console.log(link.getAttribute("href").slice(1));
// this is how i can get attributes
link.setAttribute("href","https://www.youtube.com/");
console.log(link.getAttribute("href"));

const updtAtbute = document.querySelector(".nav-items li.nav-item1");
console.log(updtAtbute);
updtAtbute.setAttribute("class","id");
console.log(updtAtbute.getAttribute("class"));
