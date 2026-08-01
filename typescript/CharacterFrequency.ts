let text: string = "typescript";

let frequency: { [key: string]: number } = {};

for (let char of text) {
    if (frequency[char]) {
        frequency[char]++;
    } else {
        frequency[char] = 1;
    }
}

console.log("Character Frequency:");
console.log(frequency);