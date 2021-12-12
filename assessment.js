// 1) Write a function that takes in an array of numbers. The function should return True if any two numbers in list sum to 0, and false otherwise.

function addToZero(arr) {
    if (arr.length < 2) return false;

    let result = false;

    arr.forEach((number, ind) => {

        for (let i = ind + 1; i < arr.length; i++) {
            
            if (number + arr[i] === 0) {
                result = true;
                break;
            }

        }

    });

    console.log(result)

    // for (let i = 0; i < arr.length; i++) {
    //     for (let j = 1; j < arr.length; j++) {
    //         if (arr[i] + arr[j] === 0) {
    //             console.log(true);
    //         } else {
    //             console.log(false);
    //         }
    //     }
    // }
}

addToZero([]);
// -> False

addToZero([1]);
// -> False

addToZero([1, 2, 3]);
// -> False

addToZero([1, 2, 3, -2]);
// -> True

// ====================================================
// 2) Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise

function uniqChar(str) {
    let chars = [];

    for (let i = 0; i < str.length; i++) {
        if (chars[str[i]]) {
            return false;
        } else {
            chars[str[i]] = 1;
        }
    }
    return true;
}

console.log(uniqChar("Monday"))
// -> True

console.log(uniqChar("Moonday"))
// -> False


// ====================================================
// 3) Write a function to check a sentence to see if it is a pangram or not.

function isPangram(str) {
    str = str.toLowerCase()
    //console.log(str.replace('the', 'slow'))

    str = str.replace(/([^a-z])+/g, '')

    // console.log(str)

    const tempArr = [];

    for (let i = 0; i < str.length; i ++) {
        if (!tempArr.includes(str[i])) {
            tempArr.push(str[i])
        }
    }

    console.log(tempArr.length === 26)
}

// For example:
isPangram("The quick brown fox jumps over the lazy dog!")
// -> True

isPangram("I like cats but not mice")
// -> False

// ====================================================
// 4) Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

function findLongestWord(arr) {
    // let longestWord = 0;

    // for (let i = 0; i < arr.length; i++) {
    //     if (longestWord.length < arr[i].length) {
    //         longestWord = arr[i];
    //     }
    // }

    // return longestWord.length

    arr.sort((a, b) => b.length - a.length)

    return arr[0].length
}

console.log(findLongestWord(["hi", "hello"]))
// -> 5

// ====================================================