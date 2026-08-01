export {};
let arr: number[] = [1, 2, 3, 4, 5];
let n = 2;

let rotated = [...arr.slice(n), ...arr.slice(0, n)];

console.log("Rotated Array:", rotated);