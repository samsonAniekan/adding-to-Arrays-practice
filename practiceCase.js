function onlyPrimes(num) {
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

function isPrime(numbers) {
    let prime = [];

    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i]
        if (onlyPrimes(number)) {
            prime.push(number)
        }
    }

    return prime;
}

console.log(isPrime([2, 4, 6, 7, 9, 11, 17, 12]));

// console.log(onlyPrimes(7))
// console.log(onlyPrimes(4))
// console.log(onlyPrimes(9))
