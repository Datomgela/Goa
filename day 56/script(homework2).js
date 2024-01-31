for (let i = 1; i <= 10; i++){
    for (let j = 1; j <= 10; j++){
        console.log(i + "x" + j + "=" + i*j);
    }
}

const person = {
    name: 'John',
    age: 25,
    isAdmin: true
};

const { isAdmin, age } = person;

if (isAdmin && age >= 18) {
    console.log('User is an adult and has admin privileges.');
} else {
    console.log("User isn't  old enough");
}

const colors = ['red', 'green', 'blue', 'yellow'];

console.log('Colors in the array:');
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

let countdown = 5;

console.log('Countdown');

while (countdown > 0) {
    console.log("Bomb will explode in " + countdown);
    countdown--;
}

console.log('BOOOOOOOM!');
