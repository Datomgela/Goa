const me = {
    name:"Dato",
    lastname:"Mgeladze",
    age: 15,
    color: "yellow"
};

const friend = {
    name:"Rezi",
    lastname:"Miqiashvili",
    age: 15,
    color: "Blue"
};

me.favoriteFood = "ხინკალი";
me.color = "Green";

console.log(me, friend);

const car = {
    name: "Toyota",
    model: "Camry",
    weight: "1500kg",
    start: function() {
        console.log("The car has started.");
    },
    brake: function(brakingTime) {
        console.log("The car will brake in", brakingTime, "seconds");
        for (let i = brakingTime; i > 0; i--) {
            console.log("Braking in",i);
        }
        console.log("Braking completed.");
    }
};

car.start();
car.brake(5);

const input = document.getElementById("input");
const btn = document.getElementById("button");

btn.addEventListener("click", function(){
    const property = input.value;
    if (me.hasOwnProperty(property)) {
        console.log(me[property]);
    } else {
        console.log("Property does not exist in the object.");
    }
});