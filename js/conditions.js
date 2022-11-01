// if(condition){
          
// }

let userInput = parseInt(prompt('enter a number'));

if(userInput % 2 == 0 ){
    console.log('the number is even '+userInput);
}
else {
    console.log('the number is odd '+userInput);
}
 


let now = new Date();
let dayOfWeek = now.getDay();

if(dayOfWeek == 5){
    alert('have a nice weekend')
}
else if(dayOfWeek ==0){
    alert('Have a nice sunday');
}
else {
    alert('have a nice day')
}



let userAge = parseInt(prompt('enter your age'));
// let userType;

// if(userAge<18){
//     userType = 'Child';
// }
// else {
//     userType = 'Adult';
// }

let userType  = (userAge<18) ? 'Child' : (userAge>200) ? 'most probably dead' : 'Adult';

// if(userAge< 18){
//     userType = 'Child'
// }
// else if (userAge> 200){
//     userType = 'Most probably dead';
// }
// else {
//     userType = 'Adult';
// }