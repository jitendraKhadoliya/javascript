// capturing
// bublling 
// delegation 


const grandParent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");
const body = document.body;

// 1 event capturing
// // approch :- top to buttom using capturing we use third value
// grandParent.addEventListener("click",()=>{
//     console.log("clicked gradparent!!!");
// },true);
// parent.addEventListener("click",()=>{
//     console.log("clicked parent!!!");
// },true);
// // child.addEventListener("click",()=>{
// //     console.log("clicked child!!!");
// // },true);
// document.body.addEventListener("click",()=>{
//     console.log("clicked document.body!!!");
// },true); 



// 2. bubbling
// approch :- buttom to top 
// grandParent.addEventListener("click",()=>{
//     console.log("clicked gradparent!!!");
// })

// parent.addEventListener("click",()=>{
//     console.log("bubble parent!!!");
// })
// child.addEventListener("click",()=>{
//     console.log("bubble child!!!");
// });

// document.body.addEventListener("click",()=>{
//     console.log("bubble document.body!!!");
// });






// 3:- event Delegation :--

// now if i try to use directly method using grandParent class let's see how i can do this

body.addEventListener("click",(e)=>{
    console.log(e.target);
});

// so here we saw we can use event bubbling and save writting extra code for every condition
