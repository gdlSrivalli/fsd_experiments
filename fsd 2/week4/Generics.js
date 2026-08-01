"use strict";
// 
// Program 1 : Generic Function
// 
function display(value) {
    console.log(value);
}
display(100);
display("Hansika");
// 
// Program 2 : Generic Array
// 
let numbers = [10, 20, 30];
let names = ["A", "B", "C"];
console.log(numbers);
console.log(names);
// 
// Program 3 : Generic Class
// 
class Box {
    constructor(value) {
        this.value = value;
    }
    show() {
        console.log("Value:", this.value);
    }
}
let box1 = new Box(50);
let box2 = new Box("TypeScript");
box1.show();
box2.show();