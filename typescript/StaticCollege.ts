export {};
class Student {
    name: string;
    static collegeName: string = "Shri Vishnu Engineering College for Women";

    constructor(name: string) {
        this.name = name;
    }

    display(): void {
        console.log("Student Name:", this.name);
    }

    static displayCollege(): void {
        console.log("College Name:", Student.collegeName);
    }
}

let student1 = new Student("Srivalli");
let student2 = new Student("Bhuvana");

student1.display();
student2.display();

Student.displayCollege();