const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
let taskUID = 1

// handle task submission
taskForm.addEventListener("submit",handleSubmit);


// Submission Handler
function handleSubmit(event) {
    event.preventDefault();

    const isValid = validateForm();
    const taskValue = taskInput.value.trim();
    if (isValid) {

        // Create new line
        let newLine = document.createElement('li');
        newLine.textContent = taskValue;
        newLine.setAttribute("class", "Task-1");

        // Create new button
        let newButton = document.createElement('button');
        newButton.textContent = "Remove";
        newButton.setAttribute("class", "Task-1");
        newButton.addEventListener("click",handleRemove)
        
        // Add list and button into list
        taskList.appendChild(newLine);
        taskList.appendChild(newButton);

    }
}

function handleRemove() {
    console.log("handle Remove was called");
    let classTaskID = document.getElementsByClassName("Task-1");
    // Remove the Line
    classTaskID[0].remove();
    // Remove the Button
    classTaskID[0].remove();
}


function validateForm() {
    const taskValue = taskInput.value.trim();
    let isValid = true;

    if (taskValue === "") {
        console.log("Task Input is required")
        isValid = false;
    }
    else{
        console.log("Task Input found")
    }

    return isValid;

}


