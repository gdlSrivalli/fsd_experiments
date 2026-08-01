"use strict";
// PROGRAM 1 : Function without Return
console.log(" Program 1");
function display() {
    console.log("Welcome to TypeScript");
}
display();
// PROGRAM 2 : Function with Parameters
console.log("\nProgram 2 ");
function multiply(a, b) {
    return a * b;
}
console.log(multiply(5, 6));
// PROGRAM 3 : Default & Optional Parameters
console.log("\nProgram 3");
function greet(name, msg = "Hello") {
    console.log(msg + " " + name);
}
greet("Hansika");
greet("Kommina", "Welcome");