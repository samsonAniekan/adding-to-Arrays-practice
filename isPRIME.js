function lastVowel(str) {
    let vowels = "aeiou";
    //let newStr = "";

    for (let i = str.length-1; i >= 0; i--) {
        let char = str[i];
        if (vowels.includes(char)) {
         return str.slice(0, i) + str.slice(i + 1)

        }

    }

}
console.log(lastVowel("helloy"))


function hipsterfy(str) {
    let newStr = str.split(" ");

    let newArr = [];

    for (let i = 0; i < newStr.length; i++) {
        let words = newStr[i];
        newArr.push(lastVowel(words));

    }

    return newArr.join(" ");
}

console.log(hipsterfy("When should everyone wake up"));
