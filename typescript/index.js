// define dom var
// add event listener on submit :
// 1. take the name
// 2. go to api gender
// 3. go to api age
// 4. go to api country
// 5. take flag from attributes and make it inner html
// 6. make the cookies ot local storage
//7. upload to github


let person = document.querySelector('#person');
let btn = document.querySelector('#btn');

btn.addEventListener('click', async (event) => {

// Gender :
let n = person.value; // input (name)
let response = await fetch ('https://api.genderize.io/'+ n);
let resJson = await response.json();
let gender = resJson.gender; // result

let G = document.querySelector('#gen');
G.innerText=gender; // show the result


// Age
let age = await fetch('https://api.nationalize.io/'+ n);



})
