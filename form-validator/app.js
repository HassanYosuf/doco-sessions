// Get all required Elements
const form = document.getElementById('form');
const user = document.getElementById('username');
const email = document.getElementById('email');
const pass = document.getElementById('password');
const pass2 = document.getElementById('password2');
const btn = document.querySelector('.btn');

// Functions
// Show Success Function
function showSuccess(input, message) {
    const element = input.parentElement
    element.className = 'input-grp success'
    const small = element.querySelector('small')
    small.innerText = message
}

// Show Error Function
function showError(input, message) {
    const element = input.parentElement
    element.className = 'input-grp error'
    const small = element.querySelector('small')
    small.innerText = message
}

// Check Required Function
function checkRequired(inputArr) {
    inputArr.forEach((input) => {
        if (input.value.trim() === '') {
            showError(input, 'Required')
        }
        else {
            showSuccess(input, 'Success')
        }
    });
}

// Check Email Function
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input, 'Valid Email')
    } else {
        showError(input, 'Invalid Email')
    }
}

// Confirm Password
function confirmPass(pass, pass2) {
    if (pass.value.trim() === '') {
        showError(pass, 'Password is Required')
        showError(pass2, 'Passwords should match')
    } else {
        if (pass.value.trim() !== pass2.value.trim()) {
            showError(pass, 'Passwords should Match')
            showError(pass2, 'Passwords should Match')
        } else {
            showSuccess(pass, 'Passwords Match')
            showSuccess(pass2, 'Passwords Match')
        }
    }
}

// Event Listeners
// Submit event
form.addEventListener('submit', (e) => {
    e.preventDefault()
    checkRequired([user, email, pass, pass2])
    checkEmail(email)
    confirmPass(pass, pass2)
})




