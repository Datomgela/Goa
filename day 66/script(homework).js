// Countdown Timer
let seconds = Number(prompt("Enter the number of seconds:"));
while (seconds > 0) {
    console.log(seconds);
    seconds--;
}
console.log("Time's up!");

// Prime Number Printer
const primeNumbers = [];
let num = 1;
while (num <= 50) {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (num > 1 && isPrime) {
        primeNumbers.push(num);
    }
    num++;
}
console.log(primeNumbers);

// Object Information Display
const person = {
    name: "David",
    age: 25,
    occupation: "Programmer"
};
console.log("Name:", person.name);
console.log("Age:", person.age);
console.log("Occupation:", person.occupation);

// Calculate Factorial
let num1 = Number(prompt("Enter a non-negative integer:"));
let factorial = 1;
for (let i = 1; i <= num1; i++) {
    factorial *= i;
}
console.log("Factorial:", factorial);

// Array Summation
let input = prompt("Enter numbers separated by spaces:");
let numbers = input.split(" ");
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += Number(numbers[i]);
}
console.log("Sum:", sum);

// Fruit Basket
const fruits = [
    { name: "Apple", color: "Red" },
    { name: "Banana", color: "Yellow" },
    { name: "Orange", color: "Orange" }
];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i].name);
}

// Car Inventory
const cars = [
    { brand: "Toyota", model: "Supra", year: 2021 },
    { brand: "Bugatti", model: "Chiron", year: 2016 },
    { brand: "Lamborghini", model: "Aventador", year: 2011 }
];

for (let i = 0; i < cars.length; i++) {
    console.log(cars[i].brand, cars[i].model, cars[i].year);
}

// Shopping List
const shoppingList = [
    { name: "Milk", quantity: 1 },
    { name: "Bread", quantity: 2 },
    { name: "Eggs", quantity: 12 }
];

for (let i = 0; i < shoppingList.length; i++) {
    console.log(shoppingList[i].name, "-", shoppingList[i].quantity);
}

// Student Attendance Tracker
const students = [
    { name: "Dato", attendance: "Present" },
    { name: "Nika", attendance: "Absent" },
    { name: "Guga", attendance: "Present" }
];

for (let i = 0; i < students.length; i++) {
    console.log(students[i].name, "-", students[i].attendance);
}

// Daily Planner
const tasks = [
    { description: "Study", priority: "High" },
    { description: "Exercise", priority: "Medium" },
    { description: "Grocery shopping", priority: "Low" }
];

for (let i = 0; i < tasks.length; i++) {
    console.log(tasks[i].description, "-", tasks[i].priority);
}

// Bookshelf Organizer
const books = [
    { title: "Harry Potter", author: "J.K. Rowling" },
    { title: "Lord of the Rings", author: "J.R.R. Tolkien" },
    { title: "To Kill a Mockingbird", author: "Harper Lee" }
];

for (let i = 0; i < books.length; i++) {
    console.log(books[i].title, "-", books[i].author);
}

// Garden Plant Tracker
const plants = [
    { name: "Rose", wateringSchedule: "Twice a week" },
    { name: "Lily", wateringSchedule: "Once a week" },
    { name: "Sunflower", wateringSchedule: "Every other day" }
];

for (let i = 0; i < plants.length; i++) {
    console.log(plants[i].name, "-", plants[i].wateringSchedule);
}

// Recipe Steps
const recipeSteps = [
    { description: "Preheat oven", duration: "10 minutes" },
    { description: "Mix ingredients", duration: "15 minutes" },
    { description: "Bake", duration: "30 minutes" }
];

for (let i = 0; i < recipeSteps.length; i++) {
    console.log(recipeSteps[i].description, "-", recipeSteps[i].duration);
}

// Movie Ratings
const movies = [
    { title: "The Lord of Rings", rating: 9.9 },
    { title: "The Godfather", rating: 9.2 },
    { title: "The Dark Knight", rating: 9.0 }
];

for (let i = 0; i < movies.length; i++) {
    console.log(movies[i].title, "-", movies[i].rating);
}

// Music Album Collection
const albums = [
    { title: "Thriller", artist: "Michael Jackson" },
    { title: "Back in Black", artist: "AC/DC" },
    { title: "The Dark Side of the Moon", artist: "Pink Floyd" }
];

for (let i = 0; i < albums.length; i++) {
    console.log(albums[i].title, "-", albums[i].artist);
}