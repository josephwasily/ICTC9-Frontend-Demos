/*
console.log('page was loaded');
console.log('Hello world');
console.log('Hello world 2');

*/

greet('joseph',30);
console.log(anotherVariable);     
// console.log(x);  
// let x; // declaration
// x= 15;  //assignment - initialization
let x=15;
let y=17.18;
console.log(typeof(x));  
console.log(x);
x="joseph";

console.log(typeof(x));  
console.log(x);

let z = x+1; // assign result of operation (+)
console.log(z);


//number
var anotherVariable = 15;

//string
x=`test ${1}` //string interpolation
console.log(x);

x='test'+x; //concatenation


//bolean 
let isSleeping = false;
console.log(typeof(isSleeping));

let isAwake = !isSleeping;
console.log(typeof(isAwake));

const isWalking = isSleeping && isAwake;
//isWalking = false;

let isHuman = isSleeping || isAwake;


//colors.firstColor = 12;

//null
var aNullVariable = null;
console.log(typeof(aNullVariable));
// console.log(aNullVariable.x);

let und;
console.log(und);
let user = 'ahmad '+123;
//function

//void function
function greet(name, age){
    console.log('Hello '+name);
    console.log('your age:',age);

    let user = name+age;
    console.log(user);  
    console.log(x, 'value of x from function');

}

greet('joseph',30);
greet('ward',29);
greet('shaimaa',29);

console.log(greet());
console.log(user);



// number functions 

function square(number){
    return multiply(number,number); 

    function multiply(number1,number2){
        return number1*number2;
    }
}


console.log(square(2));
let resultOfsquare = square(4);
console.log(resultOfsquare);
console.log(square(resultOfsquare+1));    



let add = function(num1, num2){
    return num1+num2;
}
console.log(add(1,2));
console.log(add('x','y'));


let firstNumber; //camel case 
let FirstNumber; // pascal case
let first_number;//snake case


//object data type

let personName = 'joseph';

let person = {
    name: 'joseph',
    age:  30,
    nationality:'egyptian',
    placeOfBirth: 'egypt',
    calculateAge: function(){

    },
    experience: {
        languages:['javascript','html','css'],
        stack: 'MERN',
        isFullstack: true
    },

};
console.log(person);
console.log(person.name);
console.log(person['name']);

person.language = 'english';
console.log(person);
console.log(typeof(person));
console.log(person.experience.stack);
person