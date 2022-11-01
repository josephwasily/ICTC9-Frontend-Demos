let os = ['android', 'ios', 'windows', 'linux'];
for(let i=0; i<os.length; i++){
    console.log(os[i]);
}

let i=17;
while(i<os.length){
    console.log(os[i]);
    i++;
}

let z=17;
do {
    console.log(os[z]);
    z++;
} while(z<os.length);

function iterator(value, index){
    console.log(`this was the ${value} at'${index}`);
}
os.forEach(iterator);

//functions as parameters/arguments 
// function getName(){
//     return 'joseph';
// }

// function sayName(getname){
//     console.log('hello '+getname());
// }



// sayName(getName);


// function doLongWork(callbackfn){
//     //DO HEAVY MATHMATICAL OPERATIONS
//     callbackfn();
// }


// doLongWork(function(){
//     console.log('after function execution');
// })

for(let element in os){
    console.log(element,'from for of');
}   



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


for(let element in person){
    console.log(element,'from for person loop');
}   

