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

/** Write a function pitPat(max) that accepts a number as an arg. The function should return an
array containing all positive numbers less than or equal to max that are divisible by either 4 or 6, but not both.**/
function pitPat(max) {
    let arr = [];

    for (let i = 1; i <= max; i++) {
        if (i % 4 === 0 && i % 6 === 0) {
            arr.push()
        } else if(i % 4 === 0) {
            arr.push(i);
        } else if (i % 6 === 0)
            arr.push(i);
    }
    return arr;
}

console.log(pitPat(18))


/** Write a function tripleSequence that takes in two numbers, start and length.
The function should return an array representing a sequence that begins with start and is length elements long.
In the sequence, every element should be 3 times the previous element. Assume that the length is at least 1.**/

function tripleSequence(start, length) {
    if (length === 0) {
        return [];
    }
    // the sequence is the array that will be returned it begis with start as the base element of the array
    let sequence = [start];

    // the list of elements in the sequence has to alwaye be less than the "length" in the argument passed into the function
    while (sequence.length < length) {
        let lastElem = sequence[sequence.length - 1];
        // gettig the first element of the sequence by index number and assigning it to lastElem variable

        let nextElem = lastElem * 3;
        sequence.push(nextElem);
    }
    return sequence;
}

console.log(tripleSequence(3, 5));
