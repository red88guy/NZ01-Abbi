const form = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const nameError = document.getElementById('nameError');
const emailError = document.getElementById("emailError");

// handle form submission
form.addEventListener('submit', handleSubmit);

//Form Submission Event Handler
function handleSubmit(event) {
    // prevent form from automatically submitting once we refresh our page
    event.preventDefault() 

    // validate form inputs
    const isValid = validateForm();

    if (isValid) {
        console.log("Forms submitted successfully");
        // form.requestFullscreen;
        form.reset();
        nameError.textContent = "";
        emailError.textContent = "";
    }
}

function validateForm() {
    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    let isValid = true;

    if (nameValue === "") {
        nameError.textContent = "Name is required"
        isValid = false;
    }
    else{
        nameError.textContent = "";
    }

    if (emailValue === "") {
        emailError.textContent = "Email is required"
        isValid = false;
    }
    else{
        nameError.textContent = "";
    }
    // === triple refers to checking the type
    // == refers to checking for value

    return isValid;
}