
// PROGRAM 1 : Variable Type Annotation


console.log("Program 1 ");

let name:string="Valli";
let age:number=20;
let passed:boolean=true;

console.log(name);
console.log(age);
console.log(passed);



// PROGRAM 2 : Function Annotation

console.log("\nProgram 2 ");

function add(a:number,b:number):number{
    return a+b;
}

console.log(add(20,30));



// PROGRAM 3 : Array & Object Annotation


console.log("\n Program 3 ");

let marks:number[]=[90,95,98];

let student:{
    name:string,
    roll:number
}={
    name:"Hansika",
    roll:101
};

console.log(marks);
console.log(student);
export {};