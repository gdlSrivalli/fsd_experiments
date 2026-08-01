export {};
let number: number = 145;
let temp = number;
let sum = 0;

while (temp > 0) {
    let digit = temp % 10;

    let factorial = 1;
    for (let i = 1; i <= digit; i++) {
        factorial *= i;
    }

    sum += factorial;
    temp = Math.floor(temp / 10);
}

if (sum === number) {
    console.log(number + " is a Strong Number");
} else {
    console.log(number + " is not a Strong Number");
}