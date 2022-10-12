"use strict";
// super keyword
// using super keyword we can fatch the data from super class (parent) and also can add values to new constructor

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
}
const doggy = new tommy("harshu",2,35);

console.log(doggy.run());