"use strict";
// static methods and property
// we can call directly using class name in static methods and property


class person{
    constructor(firstName,age){
        this.firstName = firstName;
        this.age = age;
    }
    // static
    static myInfo(){
        return "calling directly using static using classname";
    }   
    // static property
    static prp = "this is static property";
    run(){
        return `${this.name} with age ${this.age} can run 35 kmph`
    }
    eat(eatenValue){
        return `modified verson of eat in derived class : ${this.name} with age ${this.age} is eating ${eatenValue}` ;
    }
}
const user1 = new person("jitu",24);
console.log(user1);
console.log(user1.myInfo); //showing undefined
// here we are calling directly using classname
console.log(person.myInfo());
console.log(person.prp);