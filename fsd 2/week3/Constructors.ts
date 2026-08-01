
// Program 1 : Default Constructor
export {};

class Student {
    name: string;

    constructor() {
        this.name = "valli";
    }

    display(): void {
        console.log("Student Name:", this.name);
    }
}

let s1 = new Student();
s1.display();


// 
// Program 2 : Parameterized Constructor
// 

class Employee {
    constructor(public name: string, public salary: number) {}

    display(): void {
        console.log("Employee:", this.name);
        console.log("Salary:", this.salary);
    }
}

let emp = new Employee("Riya", 45000);
emp.display();


// 
// Program 3 : Constructor with Multiple Properties
// 

class Car {
    brand: string;
    model: string;

    constructor(brand: string, model: string) {
        this.brand = brand;
        this.model = model;
    }

    details(): void {
        console.log("Brand:", this.brand);
        console.log("Model:", this.model);
    }
}

let car = new Car("Toyota", "Innova");
car.details();