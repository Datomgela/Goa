var amountInput = document.getElementById('amountInput');
var depositButton = document.getElementById('depositButton');
var withdrawButton = document.getElementById('withdrawButton');
var balanceParagraph = document.getElementById('balance');

depositButton.addEventListener('click', function() {
    // Call a function to handle the deposit
    depositAmount();
});

withdrawButton.addEventListener('click', function() {
    // Call a function to handle the withdrawal
    withdrawAmount();
});

function depositAmount() {
    // Get the entered amount from the input field
    var enteredAmount = parseFloat(amountInput.value);

    // Check if the entered amount is a valid number
    if (!isNaN(enteredAmount) && enteredAmount > 0) {
        // Update the balance and display it
        balance += enteredAmount;
        updateBalance();
    } else {
        alert('Please enter a valid positive number for deposit.');
    }

    // Clear the input field
    amountInput.value = '';
}

function withdrawAmount() {
    // Get the entered amount from the input field
    var enteredAmount = parseFloat(amountInput.value);

    // Check if the entered amount is a valid number and does not exceed the balance
    if (!isNaN(enteredAmount) && enteredAmount > 0 && enteredAmount <= balance) {
        // Update the balance and display it
        balance -= enteredAmount;
        updateBalance();
    } else {
        alert('Please enter a valid positive number for withdrawal, and make sure it does not exceed the balance.');
    }

    // Clear the input field
    amountInput.value = '';
}

function updateBalance() {
    // Display the updated balance
    balanceParagraph.textContent = 'Balance: $' + balance.toFixed(2);
}

// Initial balance
var balance = 0;