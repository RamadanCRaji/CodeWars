// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.



// Input is a string that  contains words with number. Numbers will be between 0 and 9
//return the string sorted based on the numbers contained in each word
// if input is empty string return input

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

// change the input from string to array using arr.split(' ')
// sort array using arr.sort()
// use regex ParseInt(item.match(/\d/)[0])

// return arr.join(' ')

function order(words) {
    return words.split(' ')
        .sort((a, b) => parseInt(a.match(/\d/)[0]) - parseInt(b.match(/\d/)[0]))
        .join(' ')
}

console.log(order("is2 Thi1s T4est 3a"))
console.log(order("4of Fo1r pe6ople g3ood th5e the2"))
console.log(order("d4o dru7nken sh2all w5ith s8ailor wha1t 3we a6"))