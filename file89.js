"use strict";
// same method in base class 
// if method is not present in derived class that we are calling then it will check on base class but if method is already present then it will assign it without cheking base class

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

class tommy extends createAnimal{
    constructor(name,age,speed){
        super(name,age); //here super keyword taking the data from parent class
        this.speed = speed;
    }
    run(){
        return `${this.name} with age ${this.age} can run 35 kmph`
    }
    eat(eatenValue){
        return `modified verson of eat in derived class : ${this.name} with age ${this.age} is eating ${eatenValue}` ;
    }

}
const doggy = new tommy("harshu",2,35);

console.log(doggy.eat("pedigiri"));