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









