console.log("Check whether the number is prime or not:");
let num = 31;
let isPrime = true;
if (num <= 1) {
    isPrime = false;
}
else {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
}
if (isPrime) {
    console.log(num + " is a Prime Number");
}
else {
    console.log(num + " is Not a Prime Number");
}
export {};