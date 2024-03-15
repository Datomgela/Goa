// const date = new Date();

// let year = date.getFullYear();
// let month = date.getMonth() + 1;
// let day = date.getDate();
// let hours = date.getHours();
// let minutes = date.getMinutes();
// let seconds = date.getSeconds();
// let milliseconds = date.getMilliseconds();
// let dayOfWeek = date.getDay();

// console.log("Original Date:", date);

// date.setFullYear(year + 1);
// date.setMonth(month + 1);
// date.setDate(day + 1);
// date.setHours(hours + 1);
// date.setMinutes(minutes + 1);
// date.setSeconds(seconds + 1);
// date.setMilliseconds(milliseconds + 1);

// year = date.getFullYear();
// month = date.getMonth() + 1;
// day = date.getDate();
// hours = date.getHours();
// minutes = date.getMinutes();
// seconds = date.getSeconds();
// milliseconds = date.getMilliseconds();

// console.log("Updated Date:", date);
// console.log("Year:", year);
// console.log("Month:", month);
// console.log("Day:", day);
// console.log("Hours:", hours);
// console.log("Minutes:", minutes);
// console.log("Seconds:", seconds);
// console.log("Milliseconds:", milliseconds);


// const timer = setInterval(function(){
//     const currentDate = new Date();
//     console.log(currentDate.toString());
// }, 1000);


// let seconds = 0; 
// let minutes = 0; 
// let hours = 0;

// setInterval(function() {
//     seconds++
//     if (seconds === 60){
//         seconds = 0;

//         minutes++;
//         if (minutes === 60) {
//             minutes = 0;
//             hours++;
//         }
//     }
    
//     console.log("Seconds:", seconds, "Minutes:", minutes, "Hours:", hours);
// }, 1000);


// let second = 60;
// let minute = 5;

// const time = setInterval(function(){
//     second--;
//     if (second == 0){ 
//         minute--;
//         second = 60;
//         if(minute == 0){
//             clearInterval(time);
//         }
//     }
//     console.log(second, minute);
// }, 1000);