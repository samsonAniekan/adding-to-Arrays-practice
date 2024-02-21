// Write a function primeFactors that accepts a number as an argument.
//  The function should return an array containing all of the prime numbers that can divide the given number.
// console.log(primeFactors(12));  // [2, 3]
// console.log(primeFactors(7));   // [7]
// console.log(primeFactors(16));  // [2]
// console.log(primeFactors(30));  // [2, 3, 5]


function primeFactors(number) {
    let arr = [];

    for (let i = 1; i < number; i++) {
        if (number % i === 0 && isPrime(i)) {
            arr.push(i)
        }
    }
    return arr;


}



function isPrime(num) {
    if (num <= 1) {
        return false;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(isPrime(7))

console.log(primeFactors(12))
console.log(primeFactors(6))
