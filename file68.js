//maps 
// maps are iterables
// stores data in ordered form 

// store key value pair (like object)
// duplicate keys are not allowed in object

// differnce between maps and objects
// objects can only have strings or symbol
// as key 

// in map you can use anything as key
// like string, number, array

// let's create an object first to understand objects can only have strings or symbol

    // const obj = {
    //     firstName : "jitendra",
    //     lastName : "khadoliya",
    //     1   : "one"
    // }
    // // cheking type of values here
    // console.log(typeof obj.firstName);
    // console.log(typeof obj["lastName"]);
    // console.log(typeof obj[1]);
// so here we sae object keys are always stored in strings

// now let's see on maps
// creating maps here
// const numbers = new Map();
// direct adding in maps
// const numbers = new Map([["firstName","jitendra"],["lastName", "khadoliya"], [ 1,"one" ],[["stringKey1","stringKey2"],"valueOfString" ] ]);
// console.log(numbers);
// now storing values in map one by one
const numbers = new Map();
numbers.set("firstName" , "jitendra");
numbers.set("lastName" , "saini");
numbers.set(1 , "oneKeyValue");
numbers.set(["stringKey1","stringKey2"],"valueOfString" )
console.log(numbers);

// accssing key values in map
console.log(numbers.get("firstName"), typeof "firstName");
console.log(numbers.get(1), typeof 1);

// printing all the keys
console.log(numbers.keys());

// checking can we iterate it or not
for (const number of numbers.keys()) {
    console.log(number , typeof number);
}


const person = {
    id : 1,
    firstName : "jitu"
}

const person2 = {
    id : 2,
    firstName : "ankita"
}
// now i want to add values in this object without inseting in this object person

const updatedPerson = new Map();
updatedPerson.set(person,{age : 23, gender : "male" });
updatedPerson.set(person2,{age : 20, gender : "female" });
console.log(updatedPerson);
console.log(updatedPerson.get(person));
console.log(updatedPerson.get(person).age);
// finding person2's gender
console.log(updatedPerson.get(person2).gender);
