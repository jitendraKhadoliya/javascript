// 10:49;set name 
"use strict";
// getter and setter

class person{
    constructor(firstName,lastName,age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age=age;
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
//     setName(firstName,lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
    set fullName(fullName){
        const [firstName,lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
}


const person1 = new person ("jitnedra","khadoliya",24);
// console.log(person1.fullName()); //this will not work with get keyword
// now i will use get keyword before the name of method fullName
console.log(person1.fullName);
// now i want to change the name of firstName and lastName using setNAme
console.log(person1.firstName);
console.log(person1.lastName);
// person1.setName("ankit","saini");//set methd
console.log(person1.firstName);
console.log(person1.lastName);



person1.fullName = "punit khado";

console.log(person1.firstName);
console.log(person1.lastName);
