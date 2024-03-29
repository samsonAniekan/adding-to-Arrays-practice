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

// /** Write a function fizzBuzz(max) that accepts a number as an arg. The function should return an array
//  containing all positive numbers less than max that are divisible by either 3 or 5, but not both.**/

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

// /** Write a function pitPat(max) that accepts a number as an arg. The function should return an
// array containing all positive numbers less than or equal to max that are divisible by either 4 or 6, but not both.**/
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


// /** Write a function tripleSequence that takes in two numbers, start and length.
// The function should return an array representing a sequence that begins with start and is length elements long.
// In the sequence, every element should be 3 times the previous element. Assume that the length is at least 1.**/

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

// /**Write a function yeller(words) that takes in an array of words.
//  The function should return a new array where each element of the original array is yelled**/

function yeller(words) {
    let newArr = [];
    for (let i = 0; i < words.length; i++) {
        let capArr = words[i].toUpperCase();
        newArr.push(`${capArr}!`);
    }
    return newArr;
}
console.log(yeller(["hello", "world", "getting", "better"]))


/** Write a function tripler(nums) that takes in an array as an arg.
The function should return a new array containing three times every number of the original array.**/
function tripler(nums) {
    let newArr = [];
    for (let i = 0; i < nums.length; i++) {
        let multiple = 3;
        let testArr = nums[i] * multiple;
        newArr.push(testArr);
    }
    return newArr;
}
console.log(tripler([-5, 10, 0, 11]))

 /**Write a function longWords(words) that takes in an array of words.
  The function should return an array containing only the words that are longer than 5 characters**/

 function longWords(words) {
    let newArr = [];
    let len = words.length;

    for (let i = 0; i < len; i++) {
        if (words[i].length <= 5){
            newArr.push();
        } else {
            newArr.push(words[i]);
        }
    }
    return newArr;
}
console.log(longWords(["breaking", "story", "helping", "bikes", "motorist", "bike"]));
console.log(longWords(['bike', 'skateboard','scooter', 'moped'])); // [ 'skateboard', 'scooter' ]
console.log(longWords(['couscous', 'soup', 'ceviche', 'solyanka' ,'taco'])); // [ 'couscous', 'ceviche', 'solyanka'



/** Write a function firstAndLast that takes in an array of numbers and returns the sum of the first and last element if there is an even number of elements in the array. If there is an odd number of elements in the array,
then the function should return the difference between the first and last elements of the array.**/

function firstAndLast(numbers) {
    // represent the first and last index by variables firstElement and lastElement
    for (let i = 0; i < numbers.length; i++) {
        if (numbers.length % 2 === 0) {
            return numbers[0] + numbers[(numbers.length -1)]
        } else if (numbers.length % 2 !== 0) {
            return numbers[0] - numbers.at([numbers.length -1]);
        }


    }

}
console.log(firstAndLast([1, 2, 3, 4, 5, 6, 7, 8]));
console.log(firstAndLast([1, 2, 3]))
