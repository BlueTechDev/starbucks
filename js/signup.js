 // Function to validate the form submission
 function validateForm(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get form inputs
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    
    // Validate username
    if (usernameInput.value.trim() === '') {
        alert('Please enter a username.');
        return;
    }

    // Validate email (optional)
    if (emailInput.value.trim() !== '') {
        // Perform email validation here (e.g., regex pattern matching)
        // You can add your own email validation logic
    }

    // Validate password
    if (passwordInput.value.trim() === '') {
        alert('Please enter a password.');
        return;
    }

    // Validate confirm password
    if (confirmPasswordInput.value.trim() === '') {
        alert('Please confirm your password.');
        return;
    }

    if (passwordInput.value !== confirmPasswordInput.value) {
        alert('Passwords do not match.');
        return;
    }

    // Store user information in localStorage
    localStorage.setItem('username', usernameInput.value);
    localStorage.setItem('email', emailInput.value);

    // If all validations pass, you can submit the form
    document.getElementById('signup-form').submit();
}

// Add form submission event listener
document.getElementById('signup-form').addEventListener('submit', validateForm);

// Pre-fill login form with stored user information
document.addEventListener('DOMContentLoaded', function() {
    const storedUsername = localStorage.getItem('username');
    const storedEmail = localStorage.getItem('email');

    if (storedUsername) {
        document.getElementById('username').value = storedUsername;
    }

    if (storedEmail) {
        document.getElementById('email').value = storedEmail;
    }
});