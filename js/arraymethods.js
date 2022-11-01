


let colors = ['red', 'blue', 1, 2, true];
console.log(typeof(colors));    
console.log(colors[0]);
console.log(colors);    
colors[2]='green';
console.log(colors);
let poppedValue = colors.pop();
console.log(poppedValue,'popped value');
console.log(colors);
colors.push('purple');

// console.log(colors[17]);

//iterate on an array
// for(let i=0; i<colors.length;i++){
//     for(let i=0; i<colors.length;i++){
//     console.log(colors[i]);
//     }    
// }



let array1 = ["joseph","ahmed", "nada"];
console.log(array1.indexOf('ahmed', 1));

console.log(array1.includes('joseph'));
console.log(array1.includes('joasdasdasseph'));

// let newArray = array1.splice(0,1);
// console.log(newArray, 'returned fro splice');
// console.log(array1,'array1');


console.log(array1.slice(0,1));
console.log(array1);
//  let newArray2 = array1.splice(0,2);
//  console.log(newArray2)
 console.log(array1);

//  array1[3]=123123;
//  console.log(array1);



 //high order array methods
 
 let array2 = [];
 for(let i=0; i< array1.length; i++){
    array2[i] = array1[i].toUpperCase();
 }
 console.log(array2);



 function toUpperCaseFunc(string){
    return string.toUpperCase();
 }

 let array3 = array1.map(toUpperCaseFunc);
 console.log(array3);

 let numbers = [2,4,6,8];

 function power(number){
    return number*number;
 };
 let array4 = numbers.map(power);
 console.log(numbers);
 console.log(array4);


 let oddOrEvenArray = [1,2,3,4,5,6,7];

 function isOdd(number){
    return !(number % 2 == 0);
 }
 function isEven(number){
    return (number % 2 == 0);
 }
 function isNegative(number){
    return number < 0;
 }
 function isPositive(number){
    return number > 0;
 }

 let oddNumbers = oddOrEvenArray.filter(isOdd);
 let evenNumbers = oddOrEvenArray.filter(isEven);
 let negativeNumbers = oddOrEvenArray.filter(isNegative);

 console.log(oddNumbers);
 console.log(evenNumbers);
 console.log(negativeNumbers);


 let isAllNumbersNegative = oddOrEvenArray.every(isNegative);
 console.log(isAllNumbersNegative);

 let isAllNumbersPositive = oddOrEvenArray.every(isPositive);
 console.log(isAllNumbersPositive);

 let someNumbersAreEven = oddOrEvenArray.some(isEven);
 console.log(someNumbersAreEven);


 console.log(["joseph","ahmad"].concat(["ahmad"]));





console.log(oddOrEvenArray);
oddOrEvenArray.reduce(function(previousValue, currentValue, currentIndex, array){
        console.log(previousValue,'previous');
        console.log(currentValue,'current');
        console.log(currentIndex,'current Index');
        return 2;
});


function sum(previousValue, currentValue){
    
    return (previousValue+currentValue);
}
console.log([1,2,4].reduce(sum));




