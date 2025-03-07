document.addEventListener('DOMContentLoaded', function () {
    const registerLink = document.getElementById('register-link');
    const loginLink = document.getElementById('login-link');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    

//new

    document.getElementById('loginForm').addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Login successful! Redirecting to home...');
        window.location.href = 'service.html';
    });
//end
    registerLink.addEventListener('click', function (e) {
        e.preventDefault();
        loginForm.classList.add('hidden');
        registerForm.classList.remove('hidden');
        alert('Switched to Register Form');
    });

    loginLink.addEventListener('click', function (e) {
        e.preventDefault();
        registerForm.classList.add('hidden');
        loginForm.classList.remove('hidden');
        alert('Switched to Login Form');
    });
});


// new page

document.getElementById('registerForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Registration successful! Redirecting to login...');
    window.location.href = 'index.html';
});
