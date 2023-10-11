/**
 Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter must be converted to its ASCII code.
The second letter must be switched with the last letter
Keepin' it simple: There are no special characters in the input.

encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"
 */
/**
 * parameter- input is a string containing words seperated by spaces
 * convert the first letter in each word to ASCII code swap the postion of of the first and last letter
 * Example 
    encryptThis("Hello") === "72olle"
    encryptThis("good") === "103doo"
    encryptThis("hello world") === "104olle 119drlo"
* Potential solution
    * i will need a helper function that takes care of converting character to ASCII code and another to swap positions 
    * convert string to arr using split(' ')
    * map through the array
        * call helper function to swap poistions of letter
        * inside the callback function use str.replace and charCodeAT(0) change the fiirst letter of the first letter of the word and return
 */
let encryptThis = function (text) {
    let arrOfWords = text.split(' ').map(e => {
        let newString = swapPosition(e)
        let aSCII = e.charCodeAt(0)
        let firstLetter = e[0]
        return newString.replace(firstLetter, aSCII)
    })
    return arrOfWords.join(' ')
}

function swapPosition(e) {
    let arr = e.split('')
    let lastChar = arr[arr.length - 1]
    let secondChar = arr[1]
    arr[1] = lastChar
    arr[arr.length - 1] = secondChar
    return arr.join('')
}
console.log(encryptThis("Hello"));
console.log(encryptThis("hello world"))
console.log(encryptThis("good"))