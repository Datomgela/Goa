let users = [];

function registerUser(){
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();

    if (!username || !password) {
        alert("Please enter both username and password.");
        return;
    }

    users.push({ username, password });
    alert("Registration successful!");
    clearForm("signupForm");
}

function login(){
    let loginUsername = document.getElementById("loginUsername").value.trim();
    let loginPassword = document.getElementById("loginPassword").value.trim();

    let user = users.find(user => user.username === loginUsername && user.password === loginPassword);

    let loginMessage = document.getElementById("loginMessage");
    let newLoginMessage = document.createElement("div");

    if (user) {
        newLoginMessage.innerText = `Welcome, ${loginUsername}!`;
    } else {
        newLoginMessage.innerText = "Account does not exist or password is incorrect.";
    }

    loginMessage.innerHTML = '';
    loginMessage.appendChild(newLoginMessage);

    clearForm("loginForm");
}

function clearForm(formId){
    document.getElementById(formId).reset();
}