// Create an Object:
// Create an object named person with properties name, age, and city.

// Access Object Properties:
// Access the name property of the person object you created in the previous exercise.

// Modify Object Properties:
// Change the age property of the person object to a new value.

// Add Object Properties:
// Add a new property named country to the person object and set its value.

// Object Methods:
// Add a method named greet to the person object that logs a greeting message including the person's name.

// Object Comparison:
// Create two objects with the same properties and values. Use the === operator to compare them. Log the result.

// Nested Objects:
// Create an object named school with properties name and students, where students is an array of objects representing student names and ages. Access a student's name and age from the school object.

// Object Methods:
// Create an object called calculator with methods add, subtract, multiply, and divide that perform basic arithmetic operations on two numbers.

// Form Handling:
// Create an HTML form with fields for username and password. Use JavaScript to validate that the username is at least 5 characters long and the password is at least 8 characters long when the form is submitted. if validate add them into object.

let person = {
  name: "Dato",
  age: 15,
  city: "tbilisi"
};

console.log(person)
console.log(person.name);

person.age = 16;

person.country = "Georgia";

person.greet = function() {
    console.log("Hello, my name is", person.name);
};

person.greet();

console.log(person);

let someone = {
  name: "Giorgi",
  age: 18,
  eyeColor: "brown"
};

let someone2 = {
  name: "Giorgi",
  age: 18,
  eyeColor: "brown"
};

console.log(someone === someone2);

let school = {
  names: "School",
  students: [
    { name: "Nika", age: 12 },
    { name: "Guga", age: 13 },
    { name: "Luka", age: 11 }
  ]
};

console.log(school.students[0]);
console.log(school.students[1]);
console.log(school.students[2]);

const calculator = {
  add: function(a, b) {
      return a + b;
  },
  subtract: function(a, b) {
      return a - b;
  },
  multiply: function(a, b) {
      return a * b;
  },
  divide: function(a, b) {
      if (b === 0) {
          return "Cannot divide by zero";
      }
      return a / b;
  }
};

console.log(calculator.add(355, 255));
console.log(calculator.subtract(400, 15));
console.log(calculator.multiply(10, 6));
console.log(calculator.divide(100, 2));
console.log(calculator.divide(50, 20));
console.log(calculator.divide(4, 0));

const btn = document.getElementById("button")

btn.addEventListener("click", function() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const formData = {};

  if (username.length < 5 || password.length < 8) {
    if (username.length < 5) {
      alert("Username must be at least 5 characters long");
    }
    if (password.length < 8) {
      alert("Password must be at least 8 characters long");
    }
    return;
  }

  formData.username = username;
  formData.password = password;

  alert("Form submitted successfully!");

  console.log(formData);
});