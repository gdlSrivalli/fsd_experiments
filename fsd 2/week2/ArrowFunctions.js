"use strict";
// PROGRAM 1 : Basic Arrow Function
console.log("Program 1");
const square = (n) => n * n;
console.log(square(6));
// PROGRAM 2 : Arrow Function with Array
console.log("\n Program 2 ");
let nums = [1, 2, 3, 4, 5];
let result = nums.map(n => n * n);
console.log(result);
// PROGRAM 3 : Arrow Function with Filter
console.log("\n Program 3");
let even = nums.filter(n => n % 2 == 0);
console.log(even);