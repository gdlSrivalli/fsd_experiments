export {};
let arr: number[] = [10, 45, 20, 89, 65, 89];

let largest = -Infinity;
let secondLargest = -Infinity;

for (let num of arr) {
    if (num > largest) {
        secondLargest = largest;
        largest = num;
    } else if (num > secondLargest && num !== largest) {
        secondLargest = num;
    }
}

console.log("Second Largest:", secondLargest);