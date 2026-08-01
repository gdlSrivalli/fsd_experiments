
// PROGRAM 1 : Function without Return
export {};

console.log(" Program 1");

function display(){
    console.log("Welcome to TypeScript");
}

display();



// PROGRAM 2 : Function with Parameters


console.log("\nProgram 2 ");

function multiply(a:number,b:number):number{
    return a*b;
}

console.log(multiply(5,6));



// PROGRAM 3 : Default & Optional Parameters


console.log("\nProgram 3");

function greet(name:string,msg:string="Hello"){
    console.log(msg+" "+name);
}

greet("Srivalli");
greet("Gudala","Welcome");