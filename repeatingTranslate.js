// Write a function `repeatingTranslate` that accepts a sentence as an argument.
// The function should translate the sentence according to the following rules:
//
// - words that are shorter than 3 characters are unchanged
// - words that are 3 characters or longer are translated according to the
//   following rules:
//   - if the word ends with a vowel, simply repeat the word twice (example:
//     'like'->'likelike')
//   - if the word ends with a non-vowel, repeat all letters that come after the
//     word's last vowel, including the last vowel itself (example:
//     'trash'->'trashash')
//
// Note that if words are capitalized in the original sentence, they should remain
// capitalized in the translated sentence. Vowels are the letters a, e, i, o, u.
// console.log(repeatingTranslate("we like to go running fast"));  // "we likelike to go runninging fastast"
// console.log(repeatingTranslate("he cannot find the trash"));    // "he cannotot findind thethe trashash"
// console.log(repeatingTranslate("pasta is my favorite dish"));   // "pastapasta is my favoritefavorite dishish"


function endsWith(str) {
    let vowels = "aeiou"

    for (let i of vowels) {
        if (str.endsWith(i)) {
            return str + str;
        }
    }

    return false;
}

console.log(endsWith("like"))

function repeatWword(str) {
    let vowels = "aeiou";

    for (let i = str.length - 1; i >= 0; i--) {
        let char = str[i];

        if (vowels.includes(char)) {
            return str + str.slice(i);
        }

    }

}


function repeatingTranslate(sentence) {
    let newWords = sentence.split(" ");
    let newStr = [];

    for (let i = 0; i < newWords.length; i++) {
        let words = newWords[i];
        if (words.length >= 3) {
            if (endsWith(words)) {
                newStr.push(endsWith(words));

            } else if (repeatWword(words)) {
                newStr.push(repeatWword(words))
            }
        }

        else {
            newStr.push(words)
        }
    }

    return newStr.join(" ");
}

console.log(repeatingTranslate("we like to go running fastt"))
 console.log(repeatingTranslate("he cannot find the trash"));
