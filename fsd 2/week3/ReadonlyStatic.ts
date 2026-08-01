// 
// Program 1 : Readonly Property

export {};

class Student {
    readonly rollNo: number;

    constructor(rollNo: number) {
        this.rollNo = rollNo;
    }

    display(): void {
        console.log("Roll Number:", this.rollNo);
    }
}

let s = new Student(101);
s.display();


// 
// Program 2 : Static Property
// 

class College {
    static collegeName: string = "SVECW";

    static display(): void {
        console.log("College:", College.collegeName);
    }
}

College.display();


// 
// Program 3 : Static Method
// 

class Calculator {

    static add(a: number, b: number): number {
        return a + b;
    }
}

console.log("Sum:", Calculator.add(10, 20));