function Person(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;

    this.printInfo = function() {
        console.log("Name:", this.name);
        console.log("Surname:", this.surname);
        console.log("Age:", this.age);
    };
}

let person1 = new Person("Dato", "Mgela", 15);
let person2 = new Person("Luka", "Tskvaradze", 17);

person1.printInfo();
person2.printInfo();