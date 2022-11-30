import { isForInStatement } from "typescript";

console.log('hello world');
let x = 1; //type inference 
x++;

let z : number;

let firstName: string = 'Joseph';

let array1 = [1,2,3, 'abc', true, null];
let array2: number[] = [1,2,3];

let isTrue: boolean = true;

let tuple1: [string, number] = ['asdasd',1]

//any
let variable1;
variable1 = 1;
variable1 = 'asdsad';

//union
let year: (number | string) = 2019;
year = '2019';
//year = true;

if(typeof(year) === 'string'){ //type checking
    //operations of string
}
else {
    (<number> year).toFixed(); //type casting
}


// let size = {
//     medium:'m',
//     small:'s',
//     large:'l'
// };

// let boxSize = size.large;

// boxSize = 'xyz';


enum SizeEnum {
    Medium = 1, 
    Small = 4, 
    Large = 8
}


let boxSize: SizeEnum;
boxSize = SizeEnum.Large;
boxSize = 1;

if(boxSize == SizeEnum.Large){
    //large ? medium ?? small 
}

switch(boxSize){
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

//type alias
type person = {
    readonly firstName: string,
    lastName: string,
    age?: number,
    language: {
        motherlang: string
    },
    isdeveloper: 'yes'
}


let obj2: Person;

obj2 = {
    firstName:'joseph',
    lastName: 'botros',
    isdeveloper: 'yes'
};

//obj2.firstName = 'asdasd'; //readonly 
obj2.lastName = 'asdasdas';



let obj3: person;

// obj3 = {
//     firstName: 'joseph',

// }


// class Person {
//     firstName: string;

//     constructor(firstName: string){
//         this.firstName = firstName;
//     }
// }

interface Person {
    readonly firstName: string,
    lastName: string,
    age?: number,
    // language: {
    //     motherlang: string
    // },
    isdeveloper: 'yes',
}

// class Employee implements Person {
//     firstName: string;
//     lastName: string;
//     age?: number | undefined;
//     language: { motherlang: string; };
//     isdeveloper: "yes";

//     constructor()

// }


interface IDatabase {
    connectionString:string,
    connect:(retry:boolean) => boolean,
    query:(query: string) => string,
}


class PostGresDatabase implements IDatabase {

    connectionString: string;
    connect (retry: boolean) : boolean{
        //connect login 
        return true;
    }
    query(query: string){
        return "";
    };

    constructor(connectionString: string){
        this.connectionString = connectionString;
    }
}


class MySQL implements IDatabase {
    connectionString: string;
    connect (retry: boolean) : boolean{
        //connect login 
        return true;
    }
    query(query: string){
        return "";
    };

    constructor(connectionString: string){
        this.connectionString = connectionString;
    }
}


let database: IDatabase;

if(x == 1 ){
    database = new PostGresDatabase("");
}
else {
    database = new MySQL("server;username;password"); //abstraction
}





//never

function sum(x: number,y: number) : number{
    return x+y;
}


sum(1,2);


let sum2 = (x: number, y: number= 0 ): number=> {
    // if(y == undefined){
    //     y = 0;
    // }
    return x*y;
}
sum2(2);


function throwError(message:string, code: number) : never{
    throw new Error(`Error Code ${code}`);
}


function division(x: number, y: number){
    if(y == 0){
        throwError('Division by Zero', 15);
        //unreachable code
    }
    return x/y;
}


function total(...numbers: number[]) : number{
    
    return 0;
}

total(1,2,3,4);

function total2(num1: number, num2: number, ...numbers: number[]){

}


total2(1, 2, 2,4,5,6,6);





class Employee implements Person {
    firstName: string;
    lastName: string;
    age?: number | undefined;
    // language: { motherlang: string; };
    isdeveloper: "yes";
    protected ssn: string;
    constructor(firstName: string, lastName: string, ssn: string, age?: number){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.ssn = ssn;
        this.isdeveloper = "yes";
    }

    setssn(ssn: string){
        this.ssn = ssn;
    }

}

class Manager extends Employee{

    setsssn2(): void{
        this.ssn = 'sadasdasd';
    }
    
    setssn(ssn: string): void {
        this.setssn(ssn);

        //add logic 
        
    }
        
    
}


let person1 = new Employee('joseph', 'botros', '12315123', 30);

let employee: Employee;
employee = new Employee('joseph', 'botros', '12315123', 30);
employee = new Manager('joseph', 'botros', '12315123', 30); //runtime polymorphism 




