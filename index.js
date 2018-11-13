//create new todo item
function addTask() {
    let newUl = document.getElementById("incomplete-task");
    //takes the user input
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
    //appends the new li do the document
    newUl.appendChild(newItem);
    //when the new li element is clicked strike-trough text
    newItem.addEventListener("click", function completeTask() {
        //set the style changes for completed task
        document.getElementById(this.id).style.color = "gray";
        document.getElementById(this.id).style.textDecoration = "line-through";
        //clone old li and puts it on the completed list
        let cloneTask = document.getElementById(this.id);
        let doneTask = cloneTask.cloneNode(true);
        document.getElementById("complete-task").appendChild(doneTask);
        //remove task from the incompleted list
        document.getElementById(this.id).remove();
    });
    //clears newText box
    document.getElementById("newTask").value ="";
}

function formHandler(event) {
        //prevents the form tag from refreshing the page  
        event.preventDefault();
        addTask();
        return false;
}