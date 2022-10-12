// classes in javaScript
// came in 2015/ es6
// classes are fake

class createUser{
    constructor(firstname,lastname,age,email,address){
        console.log("constructor is called");
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.email = email;
        this.address = address;
    }
    // we can direclty add proto type values here
    favActor(){
        return "prabhas";
    }
    about(){
        console.log(`your name is ${this.firstName} ${this.lastName} and your age is ${this.age}`)
        };
    checkIs18(){
        return this.age >=18;
        };

}
// we can't invoke class constructor without new keyword
const user1 = new createUser("jitendra","khadoliya",24,"jitukhadoliya@gmail.com","ward no. 25 jhunjhunu");

console.log(user1.favActor());
console.log( Object.getPrototypeOf(user1));
