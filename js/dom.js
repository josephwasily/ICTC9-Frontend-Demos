function changeBackground(){
    document.body.style.backgroundColor = 'red';
}


let button = document.getElementById('btn');
button.addEventListener('click',changeBackground);

let button2 = document.getElementById('btn-2');
button2.addEventListener('click',function(){


    let li = document.createElement('li');
    li.innerText = 'Item 4';
    
    
    let ul = document.getElementsByClassName('items-list')[0];
    
    ul.appendChild(li);

});





//classnames
let ul = document.getElementsByClassName('items-list')[0];
console.dir(ul);
console.log(ul.classList);
console.log(ul.className);

// ul.className = ul.className + ' backgroundred';

// ul.className = ul.className.replace('backgroundred','');


ul.classList.add('backgroundred');
//attributes

let inputs = document.getElementsByTagName('input');
let inputtext = document.getElementById('textinput');
console.dir(inputs,'before');
inputtext.setAttribute('id','123123');
console.dir(inputs,'after');

console.dir(inputtext);

// inputtext.disabled = false;