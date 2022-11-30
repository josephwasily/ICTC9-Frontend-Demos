"use strict";
console.log('hello world');
let x = 1; //type inference 
x++;
let z;
let firstName = 'Joseph';
let array1 = [1, 2, 3, 'abc', true, null];
let array2 = [1, 2, 3];
let isTrue = true;
let tuple1 = ['asdasd', 1];
//any
let variable1;
variable1 = 1;
variable1 = 'asdsad';
//union
let year = 2019;
year = '2019';
//year = true;
if (typeof (year) === 'string') { //type checking
    //operations of string
}
else {
    year.toFixed(); //type casting
}
// let size = {
//     medium:'m',
//     small:'s',
//     large:'l'
// };
// let boxSize = size.large;
// boxSize = 'xyz';
var SizeEnum;
(function (SizeEnum) {
    SizeEnum[SizeEnum["Medium"] = 1] = "Medium";
    SizeEnum[SizeEnum["Small"] = 4] = "Small";
    SizeEnum[SizeEnum["Large"] = 8] = "Large";
})(SizeEnum || (SizeEnum = {}));
let boxSize;
boxSize = SizeEnum.Large;
boxSize = 1;
if (boxSize == SizeEnum.Large) {
    //large ? medium ?? small 
}
switch (boxSize) {
    case SizeEnum.Large:
        break;
    case SizeEnum.Medium:
        break;
    case SizeEnum.Small:
        break;
    default:
        break;
}
//     let num = 1;
//     num = 'asdasd';
// document.addEventListener('click', (event)=> {
//     event.charCode;
// })
let obj1 = {
    firstName: 'joseph'
};
let obj2;
obj2 = {
    firstName: 'joseph',
    lastName: 'botros',
    language: {
        motherlang: 'arabic'
    },
    isdeveloper: 'yes'
};
//obj2.firstName = 'asdasd'; //readonly 
obj2.lastName = 'asdasdas';
let obj3;
class PostGresDatabase {
    connectionString;
    connect(retry) {
        //connect login 
        return true;
    }
    query(query) {
        return "";
    }
    ;
    constructor(connectionString) {
        this.connectionString = connectionString;
    }
}
let database = new PostGresDatabase("server;username;password");
console.log(database);
