function SchoolStudent(name, surname, score) {
    this.name = name;
    this.surname = surname;
    this.score = score;
}

const student1 = new SchoolStudent("Gio", "Megrelidze", 85);
const student2 = new SchoolStudent("Tamar", "Abashidze", 92);
const student3 = new SchoolStudent("Akaki", "Berishvili", 80);
const student4 = new SchoolStudent("Luka", "Davitadze", 95);
const student5 = new SchoolStudent("Davit", "Lekviashvili", 88);

console.log(student1);
console.log(student2);
console.log(student3);
console.log(student4);
console.log(student5);

function Cars(brand, model, hp) {
    this.brand = brand;
    this.model = model;
    this.hp = hp;
}

const car1 = new Cars("Toyota", "supra MK4", 321);
const car2 = new Cars("Nissan", "GT-R R35", 550);
const car3 = new Cars("Lamborghini", "Aventador", 770);

console.log(car1);
console.log(car2);
console.log(car3);

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.info = function() {
        console.log(this.title + " by " + this.author + ", " + this.pages + " pages.");
    };
}

const book1 = new Book("Harry Potter and the Philosopher's Stone", "J. K. Rowling", 223);
const book2 = new Book("The Lord of the Rings", "J. R. R. Tolkien", 1178);
const book3 = new Book("თეთრი ბაირაღები", "ნოდარ დუმბაძე", 304);

book1.info();
book2.info();
book3.info();

function Product(name, price, category) {
    this.name = name;
    this.price = price;
    this.category = category;
    this.displayInfo = function() {
        console.log("Product: " + this.name + ", Price: $" + this.price + ", Category: " + this.category);
    };
}

const product1 = new Product("Smartphone", 599.99, "Electronics");
const product2 = new Product("Shoes", 49.99, "Apparel");
const product3 = new Product("Dumbbel", 24.99, "Sports");

product1.displayInfo();
product2.displayInfo();
product3.displayInfo();

function User(username, Email, password) {
    this.username = username;
    this.Email = Email;
    this.password = password;
}

const User1 = new User("jumpystring", "hernando67086@6mhvcvg.cse445.com", "f7n665x4");
const User2 = new User("benchplus", "bowra6050@bx51xk1.cashbenties.com", "k9i31k85");
const User3 = new User("bravecloud", "larisa56651@1g1va7g.cse445.com", "t7fsh855");

console.log(User1);
console.log(User2);
console.log(User3);
