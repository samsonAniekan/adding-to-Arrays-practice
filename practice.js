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
