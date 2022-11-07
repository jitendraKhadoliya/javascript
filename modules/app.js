// i want to import files so In ES6 there is an importing feature

import {firstName} from './utiles/fname.js'
import {age} from './utiles/age.js'
import {person2, person} from './utiles/person.js'


console.log(firstName,age);
console.log("checking code is working or not");

// const myinfo = Persos
const Person = new person("jitu","khadoliya",23);
console.log(Person);
Person.info();

const Person2 = new person2("joy","don",34);
console.log(Person2);
