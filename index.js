
//create new Tasks and add to the list
function addTask() {
    //takes the user input
    let newUl = document.getElementById("ul");
    let userInput = document.getElementById("item");
    let newItem = document.createElement("li");
    //creates a checkbox and add to li
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.value = 1;
    checkbox.name = "newCheckbox";
    //create a new li and add user input to it
    newItem.appendChild(checkbox);    
    newItem.setAttribute('id', userInput.value);
    newItem.appendChild(document.createTextNode(userInput.value));
    //appends the new li do the document
    newUl.appendChild(newItem);
}




