export {};
let number: number = 28;
let sum = 0;

for (let i = 1; i <= number / 2; i++) {
    if (number % i === 0) {
        sum += i;
    }
}

if (sum === number) {
    console.log(number + " is a Perfect Number");
} else {
    console.log(number + " is not a Perfect Number");
}