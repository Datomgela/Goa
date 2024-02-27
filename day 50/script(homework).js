const amountInput = document.getElementById('amountInput');
const depositButton = document.getElementById('depositButton');
const withdrawButton = document.getElementById('withdrawButton');
const balanceParagraph = document.getElementById('balance');

depositButton.addEventListener('click', function() {
    depositAmount();
});

withdrawButton.addEventListener('click', function() {
    withdrawAmount();
});

let balance = 0;

function depositAmount() {
    const enteredAmount = parseFloat(amountInput.value);

    if (!isNaN(enteredAmount) && enteredAmount > 0) {
        balance += enteredAmount;
        updateBalance();
    } else {
        alert('Please enter a valid positive number for deposit.');
    }

    amountInput.value = '';
}

function withdrawAmount() {
    const enteredAmount = parseFloat(amountInput.value);

    if (!isNaN(enteredAmount) && enteredAmount > 0 && enteredAmount <= balance) {
        balance -= enteredAmount;
        updateBalance();
    } else {
        alert('Please enter a valid positive number for withdrawal, and make sure it does not exceed the balance.');
    }

    amountInput.value = '';
}

function updateBalance() {
    balanceParagraph.textContent = 'Balance: $' + balance.toFixed(2);
}
