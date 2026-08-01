"use strict";
// ========================================
// Program 1 : Export Variable
// ========================================
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = exports.college = void 0;
exports.greet = greet;
exports.college = "SVECW";
console.log(exports.college);
// ========================================
// Program 2 : Export Function
// ========================================
function greet(name) {
    console.log("Welcome " + name);
}
greet("Srivalli");
// ========================================
// Program 3 : Export Class
// ========================================
class Student {
    constructor(name) {
        this.name = name;
    }
    display() {
        console.log("Student:", this.name);
    }
}
exports.Student = Student;
let s = new Student("Srivalli Gudala");
s.display();