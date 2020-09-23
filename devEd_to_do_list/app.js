// Selectors
const toDoInput = document.querySelector('.toDoInput');
const toDoButton = document.querySelector('.toDoButton');
const toDoList = document.querySelector('.toDoList');
const filterOption = document.querySelector('.filterToDo');

//Event Listeners
document.addEventListener('DOMContentLoaded', getTodos);
toDoButton.addEventListener('click', addTodo);
toDoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterToDo);

//Functions

function addTodo(event) {
    //Prevent Default (browser refresh from 'submit' button)
    event.preventDefault();
    
    //toDo div
    const toDoDiv = document.createElement('div');
    toDoDiv.classList.add("toDo");

    //Create Li
    const newToDo = document.createElement('li');
    newToDo.innerText = toDoInput.value;
    newToDo.classList.add('toDoItem');
    toDoDiv.appendChild(newToDo);

    //Add toDo to Local Storage
    saveLocalTodos(toDoInput.value);

    //Create Completed Button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("completedButton");
    toDoDiv.appendChild(completedButton);

    //Create Trash Button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trashButton");
    toDoDiv.appendChild(trashButton);

    //Append to list
    toDoList.appendChild(toDoDiv);

    //Clear toDoInput value
    toDoInput.value = '';
}

function deleteCheck(e){
    const item = e.target;

    //Delete toDo
    if(item.classList[0] === 'trashButton') {
        const toDo = item.parentElement;
        
        //Animation and remove todo from storage
        toDo.classList.add("fall");
        removeLocalTodos(toDo);
        toDo.addEventListener('transitionend', function(){
            toDo.remove();
        });
    }

    //Completed
    if(item.classList[0] === 'completedButton') {
        const toDo = item.parentElement;
        toDo.classList.toggle("completed");
    }
}

// Filter all/completed/incomplete
function filterToDo(e) {
    const todos = toDoList.childNodes;
    todos.forEach(function(todo) {
        switch (e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "incomplete":
                if (!todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                todo.style.display = "none";
                }
                break;
        }
    });
}

// Check local sotrage for existing list items
let todos;

function checkLocalStorage (){
    //Check for existing list in local storage
    if(localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
}

// Save to local storage

function saveLocalTodos(todo){
    //Check for existing list in local storage
    checkLocalStorage();
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

// Get toDos

function getTodos () {
    checkLocalStorage()
    todos.forEach(function(todo){
        //toDo div
    const toDoDiv = document.createElement('div');
    toDoDiv.classList.add("toDo");

    //Create Li
    const newToDo = document.createElement('li');
    newToDo.innerText = todo;
    newToDo.classList.add('toDoItem');
    toDoDiv.appendChild(newToDo);

    //Create Completed Button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("completedButton");
    toDoDiv.appendChild(completedButton);

    //Create Trash Button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trashButton");
    toDoDiv.appendChild(trashButton);

    //Append to list
    toDoList.appendChild(toDoDiv);
    });
}

function removeLocalTodos (toDo){
    checkLocalStorage();
    const toDoIndex = toDo.children[0].innerText;
    todos.splice(todos.indexOf(toDoIndex), 1);
    localStorage.setItem("todos", JSON.stringify(todos));
}