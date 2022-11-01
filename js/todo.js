function addTask(){
    let inputText = document.getElementById('todo');
    let ul= document.getElementById('todos');
    
    //get value from text field

    //check text is not empty
    if(inputText.value === '' ){
        alert('You cannot add empty task');
    }
    else {
         //add the element to the unordered list 
        let li = document.createElement('li');
        let text = document.createTextNode(inputText.value);
        let button = document.createElement('button');
        button.innerText = 'Done';
        button.addEventListener('click',function(e){
            // console.dir(e);
            let parentLi = e.target.parentNode;
            console.dir(parentLi);
            parentLi.classList.toggle('done');
        });

        let deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.addEventListener('click',function(e){
            // console.dir(e);
            let parentLi = e.target.parentNode;
           
            console.dir(parentLi.parentNode.removeChild(parentLi));
        });


        li.appendChild(text);
        li.appendChild(button);
        li.appendChild(deleteButton);
        ul.appendChild(li);


    }
}

let button = document.querySelector('button');
button.addEventListener('click', addTask);


let clearAllButton = document.querySelector("#clear-btn");

clearAllButton.addEventListener('click', clearAll)



function clearAll(){
    let ul = document.getElementById('todos');
    // let allTasks = document.querySelectorAll('#todos li');

    // for(let i=0;i<allTasks.length; i++){
    //     ul.removeChild(allTasks[i]);
    // }

    while(ul.lastElementChild){
        ul.removeChild(ul.lastElementChild);
    }
}




let inputSearch = document.getElementById('search');
inputSearch.addEventListener('keyup', function(event){
    let ul = document.getElementById('todos');
    let searchText = inputSearch.value;
    console.log(searchText);
    for(let todo of  ul.children){
        //check if the text content of li matches input text 
        let todoText = todo.childNodes[0].textContent;
    
        if(!todoText.includes(searchText)){
            todo.classList.add('search-hidden');
        }
        else {
            todo.classList.remove('search-hidden');
        }
    }
});
