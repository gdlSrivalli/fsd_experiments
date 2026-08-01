// ========================================
// Program 1 : Export Variable
// ========================================

export let college = "SVECW";
console.log(college);


// ========================================
// Program 2 : Export Function
// ========================================

export function greet(name: string): void {
    console.log("Welcome " + name);
}

greet("Srivalli");


// ========================================
// Program 3 : Export Class
// ========================================

export class Student {

    constructor(public name: string) {}

    display(): void {
        console.log("Student:", this.name);
    }
}

let s = new Student("Srivalli Gudala");
s.display();