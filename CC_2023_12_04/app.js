// Complete the solution so that it reverses all of the words within the string passed in.

// Words are separated by exactly one space and there are no leading or trailing spaces.

// Example(Input --> Output):

// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest 

/**
 * parameters
    * input is a string of words
    * seperated by spaces
    * no trailing spaces
* return the string with the words reversed
 */
function reverseWords(str) {
    let newString = str.split(' ').reverse().join(' ')
    return newString;
}
console.log(reverseWords('The greatest victory is that which requires no battle')) // battle no requires which that is victory greatest
console.log(reverseWords('hello word'))// word hello

