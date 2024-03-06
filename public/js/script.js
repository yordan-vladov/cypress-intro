// Selecting registration form and input elements
const registrationForm = document.querySelector("form[action='thank-you']");
const registrationPasswordInput = document.getElementById("password");
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

// Function to handle registration form submission
const handleRegistrationData = (e) => {
  e.preventDefault();

  // Retrieving input elements
  const fullnameInput = document.getElementById("fullname");
  const emailInput = document.getElementById("email");
  const dateInput = document.getElementById("date");
  const genderInput = document.getElementById("gender");

  // Getting trimmed values from input fields
  const fullname = fullnameInput.value.trim();
  const email = emailInput.value.trim();
  const password = registrationPasswordInput.value.trim();
  const date = dateInput.value;
  const gender = genderInput.value;

  // Regular expression pattern for email validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  // Clearing previous error messages
  document.querySelectorAll(".form-group .error").forEach(field => field.classList.remove("error"));
  document.querySelectorAll(".error-text").forEach(errorText => errorText.remove());

  // Performing validation checks for registration form
  if (fullname === "") {
    showError(fullnameInput, "Enter your full name");
  }
  if (!emailPattern.test(email)) {
    showError(emailInput, "Enter a valid email address");
  }
  if (password === "") {
    showError(registrationPasswordInput, "Enter your password");
  }
  if (date === "") {
    showError(dateInput, "Select your date of birth");
  }
  if (gender === "") {
    showError(genderInput, "Select your gender");
  }

  // Checking for any remaining errors before form submission
  const errorInputs = document.querySelectorAll(".form-group .error");
  if (errorInputs.length > 0) return;

  // Submitting the registration form
  registrationForm.submit();
}

// Toggling password visibility for registration form
passToggleBtn.addEventListener('click', () => {
  passToggleBtn.className = registrationPasswordInput.type === "password" ? "fa-solid fa-eye-slash" : "fa-solid fa-eye";
  registrationPasswordInput.type = registrationPasswordInput.type === "password" ? "text" : "password";
});

// Handling registration form submission event
registrationForm.addEventListener("submit", handleRegistrationData);


// Selecting login form and input elements
const loginForm = document.getElementById("login-form");
const loginPasswordInput = document.getElementById("login-password");
const loginPassToggleBtn = document.getElementById("login-pass-toggle-btn");

// Function to handle login form submission
const handleLoginData = (e) => {
  e.preventDefault();

  // Retrieving input elements
  const loginEmailInput = document.getElementById("login-email");

  // Getting trimmed values from input fields
  const loginEmail = loginEmailInput.value.trim();
  const loginPassword = loginPasswordInput.value.trim();

  // Regular expression pattern for email validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  // Clearing previous error messages
  document.querySelectorAll(".login-group .error").forEach(field => field.classList.remove("error"));
  document.querySelectorAll(".error-text").forEach(errorText => errorText.remove());

  // Performing validation checks for login form
  if (!emailPattern.test(loginEmail)) {
    showError(loginEmailInput, "Enter a valid email address");
  }
  if (loginPassword === "") {
    showError(loginPasswordInput, "Enter your password");
  }

  // Checking for any remaining errors before form submission
  const errorInputs = document.querySelectorAll(".login-group .error");
  if (errorInputs.length > 0) return;

  // Submitting the login form
  loginForm.submit();
}

// Toggling password visibility for login form
loginPassToggleBtn.addEventListener('click', () => {
  loginPassToggleBtn.className = loginPasswordInput.type === "password" ? "fa-solid fa-eye-slash" : "fa-solid fa-eye";
  loginPasswordInput.type = loginPasswordInput.type === "password" ? "text" : "password";
});

// Handling login form submission event
loginForm.addEventListener("submit", handleLoginData);
