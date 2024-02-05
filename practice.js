/**Write a function factorsOf(num) that takes in a number as an arg. The method should return an array containing all positive numbers that are able to divide into num
 with no remainder.**/
 //console.log(factorsOf(5)); // [ 1, 5 ]
 function factorsOf(num) {
    let arr = [];

    for (let i = 1; i <= num; i++) {
        if ( num % i == 0) {
             arr.push(i);
        }
    }
    return arr;
}
console.log(factorsOf(8))

/** Write a function fizzBuzz(max) that accepts a number as an arg. The function should return an array
 containing all positive numbers less than max that are divisible by either 3 or 5, but not both.**/

 function fizz(num) {
    // first define an empty array
    let newArr = []
    // i iniitialized the initial couter varibale i = 1 because 1 % 3 == 1 that means not divisible
    for(let i = 1; i < num; i++) {
        if ( i % 3 === 0 || i % 5 === 0) {
            newArr.push(i);
        }

    }
    return newArr
}

console.log(fizz(20))
