const btn = document.getElementById("btn");
const text = document.getElementById("txt");
const btn2 = document.getElementById("btn-2")

let item = 0;

btn.addEventListener('click', function(){
    item = item + 1;
    text.textContent = "You have bought: " + item;
    console.log("User has bought: " + item);
});

btn2.addEventListener('click', function(){
    item = 0;
    text.textContent = "You have bought: " + item;

    console.log("User has bought: " + item);
});