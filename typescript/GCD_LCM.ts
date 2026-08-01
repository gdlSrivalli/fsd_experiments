let num1: number = 24;
let num2: number = 36;

let a = num1;
let b = num2;

while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
}

let gcd = a;
let lcm = (num1 * num2) / gcd;

console.log("GCD =", gcd);
console.log("LCM =", lcm);