"use strict";
// class pretice and extend keyword

// task :> we need to create an class that has two property 
// 1 > name
// 2 > age
// also create an method that is eat method

class createAnimal{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    // now here we are creating method that is eat
    eat(eatenValue){
        return `${this.name} with age ${this.age} is eating ${eatenValue}`;
    }
}
const animal1 = new createAnimal("cow", 4);
const animal2 = new createAnimal("goat", 2);
console.log( animal1.eat("grass"));

//  // another task inherited class 
// difference between parent(base) class and child class(deriverd)
// we can use the data from parent class to Child class let's see how we can do this

class dog extends createAnimal {

}
// here we created child classs and now we can access the data
const tommy = new createAnimal("tommy",2);
console.log(tommy.eat("pedigiri"));
console.log(tommy);
