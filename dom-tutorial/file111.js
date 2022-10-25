// traversing using dom tree
"use strict";

const rootNode = document.getRootNode();
console.log(rootNode.childNodes);

// const htmlRootNode = rootNode.childNodes[0];
// console.log(htmlRootNode);

// // going into more depth
// const nodeList = htmlRootNode.childNodes;
// console.log(nodeList);
// // NodeList(3) [head, text, body]
// const headNode = htmlRootNode.childNodes[0];
// const textNode1 = htmlRootNode.childNodes[1];
// const bodyNode = htmlRootNode.childNodes[2];
// console.log(headNode);

// // for sbiling we can use nextSibling
// console.log(headNode.nextSibling);
// console.log(headNode.nextSibling.nextSibling);

// // for parent node

// // headNode's parent node
// console.log(headNode.parentElement);
// // console.log(nodeList);
// // want to ignore spaces

// console.log(headNode.nextElementSibling);
// console.log(headNode.childNodes);


 //   // task select h1 and go to there parent and color them
// const h1 = document.querySelector("h1");
// // console.log(h1);
// const parentOfH1 = h1.parentElement;
// const parentOfDiv = parentOfH1.parentNode;
// parentOfDiv.style.backgroundColor = "brown";
// console.log(parentOfH1);
// parentOfH1.style.backgroundColor = "blue";
// // parentOfH1.style.backgroundColor = "red";



//     h1.nextElementSibling.style.color = "red";
//     h1.nextElementSibling.style.backgroundColor = "black";

// if you want to select only data not spaces for that we can use childrenproperty
const container = document.querySelector(".container");
console.log(container.children);
