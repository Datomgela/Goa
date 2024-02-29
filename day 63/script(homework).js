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
