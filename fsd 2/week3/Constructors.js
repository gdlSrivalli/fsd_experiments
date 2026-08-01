"use strict";
// Program 1 : Default Constructor
class Student {
    constructor() {
        this.name = "Valli";
    }
    display() {
        console.log("Student Name:", this.name);
    }
}
let s1 = new Student();
s1.display();
// 
// Program 2 : Parameterized Constructor
// 
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    display() {
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
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }
    details() {
        console.log("Brand:", this.brand);
        console.log("Model:", this.model);
    }
}
let car = new Car("Toyota", "Innova");
car.details();