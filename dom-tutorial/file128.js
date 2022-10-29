// capturing
// bublling 
// delegation 


const grandParent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

// 1 event capturing
// approch :- top to buttom using capturing we use third value
grandParent.addEventListener("click",()=>{
    console.log("clicked gradparent!!!");
},true);
parent.addEventListener("click",()=>{
    console.log("clicked parent!!!");
},true);
// child.addEventListener("click",()=>{
//     console.log("clicked child!!!");
// },true);
// document.body.addEventListener("click",()=>{
//     console.log("clicked document.body!!!");
// },true);



// 2. bubbling
// approch :- buttom to top 
// grandParent.addEventListener("click",()=>{
//     console.log("clicked gradparent!!!");
// })

// parent.addEventListener("click",()=>{
//     console.log("clicked parent!!!");
// })
child.addEventListener("click",()=>{
    console.log("clicked child!!!");
});

document.body.addEventListener("click",()=>{
    console.log("clicked document.body!!!");
});