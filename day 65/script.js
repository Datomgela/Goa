const form = document.getElementById("form");

const accounts = [];

const Account = function(username,password){
    this.username = username;
    this.password = password;
}

form.addEventListener("submit", function(e){
    e.preventDefault();

    const usernameValue = form.elements.username.value;
    const passwordValue = form.elements.password.value;
    const rePasswordValue = form.elements.rePassword.value;

    if(passwordValue === rePasswordValue){
        const account = new Account(usernameValue,passwordValue);
        accounts.push(account);
        alert("Account succesfully created");
    } else{
        alert("Passwords do not match");
    }


    console.log(accounts);
})