"use strict";
// Program 1 : Public Access Modifier
class Student {
    constructor(name) {
        this.name = name;
    }
    display() {
        console.log("Student Name:", this.name);
    }
}
let s1 = new Student("Valli");
console.log("Accessing Public Variable:", s1.name);
s1.display();
// Program 2 : Private Access Modifier
class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }
    showBalance() {
        console.log("Balance:", this.balance);
    }
}
let account = new BankAccount(5000);
// console.log(account.balance); // Error because balance is private
account.showBalance();
// Program 3 : Protected Access Modifier
class Employee {
    constructor(salary) {
        this.salary = salary;
    }
}
class Manager extends Employee {
    constructor(salary) {
        super(salary);
    }
    display() {
        console.log("Manager Salary:", this.salary);
    }
}
let manager = new Manager(75000);
manager.display();