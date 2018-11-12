//create new todo item
function addTask() {
    //takes the user input
    let newUl = document.getElementById("incomplete-task");
    let userInput = document.getElementById("newTask");
    let newItem = document.createElement("li");
    //create new div
    let div = document.createElement("div");
    div.setAttribute("class", "task");
    //create a new li and add user input to it
    newItem.appendChild(div);    
    newItem.setAttribute('id', "incomplete");
    newItem.appendChild(document.createTextNode(userInput.value));
    //appends the new li do the document
    newUl.appendChild(newItem);
    //clears newText box
    document.getElementById("newTask").value =""; 
}
//Create method to line-through element
