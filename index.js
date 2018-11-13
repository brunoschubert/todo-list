let idCounter = 0;
//create new todo item
function addTask() {
    //takes the user input
    let newUl = document.getElementById("incomplete-task");
    let userInput = document.getElementById("newTask");
    let newItem = document.createElement("li");
    //create new div
    let newDiv = document.createElement("div");
    //create a new li and add user input to it
    newItem.appendChild(newDiv);    
    newItem.setAttribute('id', "incomplete");
    newItem.appendChild(document.createTextNode(userInput.value));
    newItem.style.fontFamily = "Roboto";
    newItem.setAttribute("class", "task");
    newItem.setAttribute("id", idCounter);
    //appends the new li do the document
    newUl.appendChild(newItem);
    //when the new li element is click strike trough 
    newItem.addEventListener("click", function completeTask() {
        document.getElementById(this.id).style.color = "gray";
        document.getElementById(this.id).style.textDecoration = "line-through";
    });
    //clears newText box
    document.getElementById("newTask").value ="";
    idCounter++; 
}
