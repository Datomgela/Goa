// Real-time Clock:
const timer = setInterval(function(){
    const currentDate = new Date();
    console.log(currentDate.toString());
}, 1000);


//Calculate Area of a Circle:
function calculateCircleArea(radius) {
    let area = Math.PI * Math.pow(radius, 2);
    return area;
}

let radius = 34.0;
let area = calculateCircleArea(radius);
console.log("Area of the circle with radius", radius, "is:", area);

//Convert String to Kebab Case:
function toKebabCase(str) {
    return str.replace(/[A-Z]/g, '-$&').toLowerCase();
}

console.log(toKebabCase("programmingBest"));
console.log(toKebabCase("jsIsBest"));


//Countdown Timer:
let count = 60;
const time = setInterval(function() {
  count--;
  console.log(count);
  if (count === 0) {
    clearInterval(time);
    console.log("Time's up!");
  }
}, 1000);


//Get Day of the Week:
function getDayOfWeek(dateString) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    const date = new Date(dateString);
    const dayOfWeekIndex = date.getDay();
    
    return daysOfWeek[dayOfWeekIndex];
}

const date = '2024-03-15';
console.log(getDayOfWeek(date));


// Get the current date
let today = new Date();
let dd = today.getDate();

let mm = today.getMonth() + 1;

let yyyy = today.getFullYear();

if (dd < 10) {
    dd = '0' + dd;
} 

if (mm < 10) {
    mm = '0' + mm;
} 

today = dd + '/' + mm + '/' + yyyy;
console.log(today);

today = mm + '/' + dd + '/' + yyyy;
console.log(today);

today = yyyy + '-' + mm + '-' + dd;
console.log(today);


//Check if a Given Date Falls on a Leap Year:
function isLeapYear(year) {
    return year % 4 === 0 && year % 100 != 0;
}

const userInput = prompt("Enter a current year:");
const inputDate = new Date(userInput);
const year = inputDate.getFullYear();

console.log(isLeapYear(year));


//Calculate Difference in Days Between Two Dates:
const firstDate = new Date("04/14/2008");
const secondDate = new Date();

const differenceInDays = Math.floor((secondDate - firstDate) / (1000 * 60 * 60 * 24));

console.log("Difference is:", differenceInDays, "day");


//Calculate Age in Years:
function calculateAge(birthDate) {
    let now = new Date();
    let currentYear = now.getFullYear();

    let birthYear = birthDate.getFullYear();

    let age = currentYear - birthYear;

    if (now < new Date(birthDate.setFullYear(currentYear))) {
      age = age - 1;
    }
    return age;
}

console.log(calculateAge(new Date(2008, 3, 14)));