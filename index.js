//create new todo item
function addTask() {
    //takes the user input
    let newUl = document.getElementById("incomplete-task");
    let userInput = document.getElementById("newTask");
    let newItem = document.createElement("li");
    //creates a checkbox and add to li
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.value = "";
    checkbox.name = "newCheckbox";
    checkbox.id = "checkbox";
    //create a new li and add user input to it
    newItem.appendChild(checkbox);    
    newItem.setAttribute('id', "incomplete");
    newItem.appendChild(document.createTextNode(userInput.value));
    //appends the new li do the document
    newUl.appendChild(newItem);
    //clears newText box
    document.getElementById("newTask").value = ""; 
}

function completeTask() {

}

