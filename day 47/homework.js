let userName = document.getElementById("text-input");

let userSurname = document.getElementById("text");

let userEmail = document.getElementById("email-input");

let userPassword = document.getElementById("password-input");

let userDate = document.getElementById("date-input");

let userAge = document.getElementById("number-input");

let btn = document.getElementById("btn");

btn.addEventListener('click', function(){
    console.log(userName.value, userSurname.value, userEmail.value, userPassword.value, userDate.value, userAge.value);
})