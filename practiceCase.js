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

function onlyPrimes(numbers) {
    // prime array to store the collectio of array returned
    let prime = [];

    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i]
        // calling isPrimes helper function and passing a parameter to test the number if its a prime number
        if (isPrime(number)) {
            prime.push(number)
        }
    }

    return prime;
}

console.log(onlyPrimes([2, 4, 6, 7, 9, 11, 17, 12])); // output : 2, 7, 11, 17

// console.log(onlyPrimes(7))
// console.log(onlyPrimes(4))
// console.log(onlyPrimes(


// Write a method caesarCipher that takes in a string and a number. The function should
// return a new string where every character of the original is shifted num characters in the alphabet.
//console.log(caesarCipher("apple", 1)); // "bqqmf"


function caserCipher(string, num) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";;
    let len = string.length;
    let newString = ""

    for (let i = 0; i < len; i++) {
        let char = string[i];
        let oldIndex = alphabet.indexOf(char);
        let newIndex = oldIndex + 1;
        let newChar = alphabet.charAt(newIndex);
        //let newChar = alphabet[newIndex % alphabet.length];
        console.log(newChar);
        newString += newChar

    }
    return newString
}


console.log(caserCipher("abc",2))
