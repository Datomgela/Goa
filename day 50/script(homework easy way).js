const amountInput = document.getElementById('amountInput');
const depositButton = document.getElementById('depositButton');
const withdrawButton = document.getElementById('withdrawButton');
const balanceParagraph = document.getElementById('balance');

let balance = 0;

depositButton.addEventListener('click', function(){
    const value = Number(amountInput.value);

    balance = balance + value;

    balanceParagraph.textContent = "Balance: " + balance;

})

withdrawButton.addEventListener('click', function(){
    const value = Number(amountInput.value);

    if(balance >= value){
        balance = balance - value;
    } else{
        alert("The amount on your balance is not enough")
    }
    
    balanceParagraph.textContent = "Balance" + balance;
})