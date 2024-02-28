document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form[data-test-id='login-form']");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        // Clear previous error messages
        const errorMessages = document.querySelectorAll(".error-message");
        errorMessages.forEach(msg => msg.remove());

        // Get input values
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // Check if the login is successful
        if (email === "admin@abv.bg" && password === "admin12345678") {
            // Redirect to the thank you page
            window.location.href = "thank-you";
        } else {
            // Display error message for invalid credentials
            displayError(emailInput, "Invalid email or password");
        }
    });

    function displayError(inputElement, message) {
        const errorElement = document.createElement("small");
        errorElement.classList.add("error-message");
        errorElement.innerText = message;
        inputElement.parentElement.appendChild(errorElement);
    }
});
