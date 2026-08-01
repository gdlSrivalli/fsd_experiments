"use strict";
// 
// Program 1 : Readonly Property
// 
class Student {
    constructor(rollNo) {
        this.rollNo = rollNo;
    }
    display() {
        console.log("Roll Number:", this.rollNo);
    }
}
let s = new Student(101);
s.display();
// 
// Program 2 : Static Property
// 
class College {
    static display() {
        console.log("College:", College.collegeName);
    }
}
College.collegeName = "SVECW";
College.display();
// 
// Program 3 : Static Method
// 
class Calculator {
    static add(a, b) {
        return a + b;
    }
}
console.log("Sum:", Calculator.add(10, 20));