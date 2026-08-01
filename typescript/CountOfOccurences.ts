export {};
let arr: number[] = [1, 2, 3, 2, 4, 1, 2];

let frequency: { [key: number]: number } = {};

for (let num of arr) {
    if (frequency[num]) {
        frequency[num]++;
    } else {
        frequency[num] = 1;
    }
}

console.log(frequency);