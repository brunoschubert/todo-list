//define variables for entering new tasks
/*let userInput = document.getElementById("input");
let buttonCLick = document.getElementById("button")[0]; 
let incompleteTasks = document.getElementById("incomplete-task");
let completeTasks = document.getElementById("complete-task");*/
//creating new Tasks
function addTask() {
    let newUl = document.getElementById("ul");
    let userInput = document.getElementById("item");
    let newItem = document.createElement("li");
    newItem.setAttribute('id', userInput.value);
    newItem.appendChild(document.createTextNode(userInput.value));
    newUl.appendChild(newItem);
}


