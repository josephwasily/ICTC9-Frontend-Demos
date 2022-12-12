import Person, { variable1 as x, greet } from "./module1.js";

let person1 = new Person();
person1.age = 30;
console.log(person1);
console.log(x);
let variable1 = 'y';
greet();
