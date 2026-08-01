export {};
let text: string = "programming";

let result = "";

for (let char of text) {
    if (!result.includes(char)) {
        result += char;
    }
}

console.log("Original String:", text);
console.log("After Removing Duplicates:", result);