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


console.log(primeFactors(12)) // [2, 6]
console.log(primeFactors(6)) // [2, 6]
console.log(primeFactors(8))


// Write a function choosePrimes(nums) that takes in an array of numbers as args.
//  The function should return a new array containing the primes from the original array.
//   A prime number is a number that is only divisible by 1 and
//  itself. Hint: consider creating a helper function to check if a number is prime!


//check if a number is prime number using checkIfPrime helper function

// create a new function called choosePrime that takes an array prime numbers

// loop through every value of the choosePrime array
// then check to see if the number at a partcicular index is a prime number

// if the number is prime
// push the number into the new empty array created above
// return the array of new prime numbers

function checkIfNumPrime(num) {
    if (num <= 1) {
        return false;
    }

    for (let i = 2; i < num; i++) {
        if (num % 2 === 0) {
            return false;

        }

    }

    return true;
}

function choosePrimes(arr) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        if (checkIfNumPrime(num)) {   // by calling the checkIfNumPrime function 1, 2, 3, 6, 7, 9 are checked for prime numbers
            newArr.push(num)
            console.log(newArr);
        }
    }

    return newArr;
}

console.log(choosePrimes([1, 2, 3, 6, 7, 9])) // [2, 3, 7]
