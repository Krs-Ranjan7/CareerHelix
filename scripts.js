// Add form validation to the login and registration forms

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('form[action="php/login.php"]');
    const registerForm = document.querySelector('form[action="php/register.php"]');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if (username === '' || password === '') {
                event.preventDefault();
                alert('Please fill in all fields.');
            }
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if (username === '' || password === '') {
                event.preventDefault();
                alert('Please fill in all fields.');
            }
        });
    }
});

// Add any additional JavaScript functionality you may need
