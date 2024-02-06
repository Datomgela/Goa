// N1
for(let i=0; i<100; i++){
    console.log(i);
}

// N2
for(let i=100;i>=0; i--){
    console.log(i);
}

// N3
let evenNumbers = [];
let oddNumbers = [];

for (let number = 0; number <= 20; number++){
    if (number % 2 === 0){
        evenNumbers.push(number);
    }else{
        oddNumbers.push(number);
    }
}

console.log("Even numbers:", evenNumbers);
console.log("Odd numbers:", oddNumbers);

// N4
let userName = prompt("Enter your name");
let myFriend = "rezi";

if (myFriend === userName){
    console.log("Hello My Friend");
}else{
    console.log("You Are Not My Friend");
}

//N5
let i = 0;

while (i <= 100) {
    console.log(i);
    i += 5;
}