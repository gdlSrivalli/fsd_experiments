//program 1:Number Type

export {};
let age: number = 20;
let marks: number = 92.5;

console.log("Age:", age);
console.log("Marks:", marks);
console.log("Total:", age + marks);


// Program 2 : String Type


let firstName: string = "Srivalli";
let lastName: string = "Gudala";

console.log("Full Name:", firstName + " " + lastName);
console.log(`Welcome ${firstName}`);
console.log(firstName.toUpperCase());


// Program 3 : Boolean Type


let isPassed: boolean = true;
let attendance: number = 85;

console.log("Passed:", isPassed);
console.log("Attendance >= 75 :", attendance >= 75);
console.log("Eligible:", isPassed && attendance >= 75);