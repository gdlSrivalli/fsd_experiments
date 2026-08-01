
// PROGRAM 1 : any Type
export {};

console.log("\nProgram 1 : ");

let data: any;

data = 100;
console.log(data);

data = "Hansika";
console.log(data);

data = true;
console.log(data);



// PROGRAM 2 : unknown Type


console.log("\n Program 2 :");

let value: unknown;

value = "TypeScript";

if(typeof value === "string"){
    console.log(value.toUpperCase());
}

value = 50;

if(typeof value === "number"){
    console.log(value * 2);
}



// PROGRAM 3 : void Type


console.log("\n Program 3 : ");

function greet(name:string):void{
    console.log("Welcome "+name);
}

greet("Valli");