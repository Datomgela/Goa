const me = {
    name: "David",
    surname: "Mgeladze",
    age: 15,
    realName: function(value){
        me.name = value;
    }
};

me.realName("Dato");

console.log(me);

const car = {
    color: "green",
    doors: "two",
    brand: "Lamborghini",
    model: "Huracan",
    engine: {
        type: "V8",
        horsepower: 650,
        start: function(value) {
            car.engine.horsepower = value;
            console.log(car.engine);
        }
    }
};

console.log(car);

car.engine.start();

const btn = document.getElementById("btn");

btn.addEventListener('click', function(){

    const nameInput = document.getElementById("nm");
    const surnameInput = document.getElementById("sr");
    const ageInput = document.getElementById("age");
    
    const personInfo = {
        firstName: nameInput,
        lastName: surnameInput,
        age: ageInput,
    };

    console.log(personInfo);
})

const amazon = {
    type: "Online Marketing",
    creatorAge: 60,
    creator: "Jeff",
}

console.log(amazon)

const manipulationObj = {
    changeType: function(newtype){
        amazon.type = newtype;
        console.log(amazon.type);
    },

    celebrateBirthday: function(){
        amazon.creatorAge += 1;
        console.log("Happy Birthday! New age:", amazon.creatorAge);
    },

    name: function(){
        amazon.creator = "Jeff Bezos";
        console.log("Full name ", amazon.creator);
    }
};

manipulationObj.changeType("Online Marketing and shipping");
manipulationObj.celebrateBirthday();
manipulationObj.name();

console.log(manipulationObj.changeType);
console.log(manipulationObj.celebrateBirthday);
console.log(manipulationObj.name);