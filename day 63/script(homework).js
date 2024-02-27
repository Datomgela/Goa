function schoolStudent(name, surname, score) {
    this.name = name;
    this.surname = surname;
    this.score = score;
}

const student1 = new schoolStudent("Gio", "Megrelidze", 85);
const student2 = new schoolStudent("Tamar", "Abashidze", 92);
const student3 = new schoolStudent("Akaki", "Berishvili", 80);
const student4 = new schoolStudent("Luka", "Davitadze", 95);
const student5 = new schoolStudent("Davit", "Lekviashvili", 88);

console.log(student1);
console.log(student2);
console.log(student3);
console.log(student4);
console.log(student5);