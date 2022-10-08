"use stirct";
// sets
// sets are (itreables)
// store data 
// sets also have own methods
// no index acess
// order is not guarnted
// unique items only(no duplicates are allowed)


// creating sets
// const items = ["item1","item2"];
    // const numbers = new Set([1,2,3,4]);
    // console.log(numbers);
    // // numbers.add(7);
    // numbers.add(["item1","item2"]);
    // // numbers.add(["item1","item2"]);//we can add this because this is with differnt loction
    // console.log(numbers);

    // // let's access for of loop
    // for(let number of numbers){
    //     console.log(number);
    // }

const myArr = [1,32,32,2,4,5,4,2,7];
// Aim = our aim is find all this unique items using sets
const uniqueItems = new Set(myArr);
console.log(uniqueItems);
// now want to acees length property
// but can't accees directly because it's set
// uniqueItems.length();
// for length we can use for of loop
length = 0;
for(let item of uniqueItems){
    length++;
}
console.log(length);

// chekcking number is available or not in sets
if(uniqueItems.has(32)){
    console.log("number 32 is avaliable");
}else console.log("number 32 is not avaliable");


