// 
// Program 1 : Generic Function
// 
export {};
function display<T>(value: T): void {
    console.log(value);
}

display<number>(100);
display<string>("Srivalli");


// 
// Program 2 : Generic Array
// 

let numbers: Array<number> = [10, 20, 30];
let names: Array<string> = ["A", "B", "C"];

console.log(numbers);
console.log(names);


// 
// Program 3 : Generic Class
// 

class Box<T> {
    value: T;

    constructor(value: T) {
        this.value = value;
    }

    show(): void {
        console.log("Value:", this.value);
    }
}

let box1 = new Box<number>(50);
let box2 = new Box<string>("TypeScript");

box1.show();
box2.show();