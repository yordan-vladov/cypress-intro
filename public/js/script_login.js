// Selecting form and input elements
const form = document.querySelector("form");
const passwordInput = document.getElementById("password");
const passToggleBtn = document.getElementById("pass-toggle-btn");

// Function to display error messages
const showError = (field, errorText) => {
    field.classList.add("error");
    const errorElement = document.createElement("small");
    errorElement.classList.add("error-text");
    errorElement.innerText = errorText;
    errorElement.setAttribute(`data-test-id`,`${field.getAttribute('data-test-id')}-error`)
    field.closest(".form-group").appendChild(errorElement);
}

// Function to display error messages for password
const showPasswordError = (errorText) => {
    const passwordGroup = document.querySelector(".form-group.password");
    showError(passwordGroup, errorText);
}

// Function to display error messages for date


// Function to display error messages for gender


// Function to handle form submission
const handleFormData = (e) => {
    e.preventDefault();

    // Retrieving input elements
    const fullnameInput = document.getElementById("fullname");
    
   

    // Getting trimmed values from input fields
    const fullname = fullnameInput.value.trim();
   
    const password = passwordInput.value.trim();
   

    // Regular expression pattern for email validation
   

    // Clearing previous error messages
    document.querySelectorAll(".form-group .error").forEach(field => field.classList.remove("error"));
    document.querySelectorAll(".error-text").forEach(errorText => errorText.remove());

    // Performing validation checks
    if (fullname === "") {
        showError(fullnameInput, "Enter your full name");
    }
    
    if (password === "") {
        showError(passwordInput, "Enter your password");
    }
    

    // Checking for any remaining errors before form submission
    const errorInputs = document.querySelectorAll(".form-group .error");
    if (errorInputs.length > 0) return;

    // Submitting the form
    form.submit();
}

// Toggling password visibility
passToggleBtn.addEventListener('click', () => {
    passToggleBtn.className = passwordInput.type === "password" ? "fa-solid fa-eye-slash" : "fa-solid fa-eye";
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
});

// Handling form submission event
form.addEventListener("submit", handleFormData);
