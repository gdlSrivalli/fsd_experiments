export {};
class Student {
    name: string;
    age: number;
    course: string;

    constructor(name: string, age: number, course: string) {
        this.name = name;
        this.age = age;
        this.course = course;
    }

    display(): void {
        console.log("Student Details");
        console.log("Name:", this.name);
        console.log("Age:", this.age);
        console.log("Course:", this.course);
    }
}

let student = new Student("Srivalli", 18, "AI & DS");
student.display();