const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
let taskUID = 0

// handle task submission
taskForm.addEventListener("submit",handleSubmit);


// Submission Handler
function handleSubmit(event) {
    event.preventDefault();

    taskUID++;
    const isValid = validateForm();
    const taskValue = taskInput.value.trim();
    if (isValid) {

        // Create new line
        console.log(`Task-${taskUID} to be added`)
        let newLine = document.createElement('li');
        newLine.textContent = taskValue;
        newLine.setAttribute("class", "Task-"+taskUID);

        // Create new button
        let newButton = document.createElement('button');
        newButton.textContent = "Remove";
        newButton.setAttribute("class", "Task-"+taskUID);
        newButton.addEventListener("click",handleRemove)
        
        // Add list and button into list
        taskList.appendChild(newLine);
        taskList.appendChild(newButton);
        
        // Clear the inputs immediately
        taskInput.value = "";
    }
}

function handleRemove(event) {
    console.log("handle Remove was called");
    console.log(`${event.currentTarget.className} to be removed`);
    // let classTaskID = document.getElementsByClassName("Task-"+taskUID);
    let classTaskID = document.getElementsByClassName(event.currentTarget.className);
    // Remove the Line
    classTaskID[0].remove();
    // Remove the Button
    classTaskID[0].remove();
}

// Tutorial on how to pass arguments into event-listening function.
// https://stackoverflow.com/questions/256754/how-to-pass-arguments-to-addeventlistener-listener-function


function validateForm() {
    const taskValue = taskInput.value.trim();
    let isValid = true;

    if (taskValue === "") {
        console.log("Task Input is required")
        isValid = false;
    }

    return isValid;

}


// Input line isn't clear after submission. 