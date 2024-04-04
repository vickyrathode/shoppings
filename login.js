// Define the predefined username and password
const predefinedUsername = 'vikki';
const predefinedPassword = '123';

// Check if username is stored in local storage
const username = localStorage.getItem('username');
const userInfoContainer = document.getElementById('user-info-container');

if (username !== null && username !== undefined && username !== '') {
    // Display welcome message
    const welcomeMessage = document.createElement('div');
    welcomeMessage.textContent = `Welcome, ${username}!`;
    userInfoContainer.appendChild(welcomeMessage);
    
    // Display logout button
    const logoutButton = document.createElement('button');
    logoutButton.textContent = 'Logout';
    logoutButton.addEventListener('click', function() {
        // Remove username from local storage
        localStorage.removeItem('username');
        // Redirect to login page
        window.location.href = 'login.html';
    });
    userInfoContainer.appendChild(logoutButton);
} else {
    // Check if on the login page
    if (window.location.pathname.includes('login.html')) {
        const loginForm = document.getElementById('login-form');

        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Get username and password from form input
            const enteredUsername = document.getElementById('username').value;
            const enteredPassword = document.getElementById('password').value;
            
            // Check if entered username and password match predefined ones
            if (enteredUsername === predefinedUsername && enteredPassword === predefinedPassword) {
                // Store username in local storage
                localStorage.setItem('username', enteredUsername);
                // Redirect to index page
                window.location.href = 'index.html';
            } else {
                alert('Invalid username or password. Please try again.');
            }
        });
    }
}

// document.addEventListener('DOMContentLoaded', function() {
//     const loginForm = document.getElementById('login-form');
//     const errorMessage = document.getElementById('error-message');

//     loginForm.addEventListener('submit', function(event) {
//         event.preventDefault(); // Prevent form submission

//         // Get username and password from form
//         const username = document.getElementById('username').value;
//         const password = document.getElementById('password').value;

//         // Perform simple validation (you can add more complex validation as needed)
//         if (username === 'vikki' && password === '123') {
//             // Login successful, redirect to home page or perform other actions
//             window.location.href = 'index.html';
//         } else {
//             // Display error message
//             errorMessage.textContent = 'Invalid username or password. Please try again.';
//         }
//     });
// });
