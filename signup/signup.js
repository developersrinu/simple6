// Getting references to the input fields and other elements on the page
const signupBtn = document.getElementById('signupBtn');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const loginRedirect = document.getElementById('loginRedirect');

// Function to check if a user with the given email already exists in localStorage
function checkIfUserExist(email) {
    let users = JSON.parse(localStorage.getItem('users'));
    const obj = users.find(userObj => {
        return userObj.email === email;
    });
    if (obj) return true;
    else return false;
}

// Function to save the user's information to localStorage and handle user sign-in
function saveUser(fName, lName, emailInput, passwordInput) {
    let userObj = {
        firstName: fName,
        lastName: lName,
        email: emailInput,
        password: passwordInput,
    };
    let users = JSON.parse(localStorage.getItem('users'));
    if (users === null) {
        users = [];
    }
    users.push(userObj);
    localStorage.setItem('users', JSON.stringify(users));

    // Saving the user's data in sessionStorage to simulate sign-in
    sessionStorage.setItem('loggedInUser', JSON.stringify(userObj));

    // Clearing the input fields
    firstName.value = '';
    lastName.value = '';
    email.value = '';
    password.value = '';
    confirmPassword.value = '';

    // Displaying an alert to indicate successful signup
    alert('Sign up successful');

    // Redirecting to the profile page (assuming it exists in a "profile" folder)
    window.location.href = './shop';
}

// Event listener for the Signup button click
signupBtn.addEventListener('click', (event) => {
    event.preventDefault();
    
    // Checking if any of the fields are empty
    if (firstName.value.trim() === '' ||
        lastName.value.trim() === '' ||
        email.value.trim() === '' ||
        password.value.trim() === '' ||
        confirmPassword.value.trim() === '') {
        alert('All fields are mandatory');
    } else {
        // Checking if the password matches the confirmation
        if (password.value.trim() !== confirmPassword.value.trim()) {
            alert('Password not matching');
            password.value = '';
            confirmPassword.value = '';
        } else {
            // Checking if the user exists in localStorage
            if (localStorage.getItem('users')) {
                if (checkIfUserExist(email.value)) {
                    alert('Email is linked with another account');
                } else {
                    // If user does not exist, save the user's information
                    saveUser(firstName.value, lastName.value, email.value, password.value);
                }
            } else {
                // If there are no users in localStorage, save the user's information
                saveUser(firstName.value, lastName.value, email.value, password.value);
            }
        }
    }
});

// Event listener for the Login Redirect link click
loginRedirect.addEventListener('click', () => {
    // Redirecting to the login page (assuming it exists in the root directory)
    location.href = './profile';
});
