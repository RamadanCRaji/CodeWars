// Write a function that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

// Examples:
// "String" => "StRiNg"
// "Weird string case" => "WeIrD StRiNg CaSe"

/**
 * input is a array of strings
 * return the an array where all even indexed characters in each word is upper cased, and all odd indexed characters in each word lower cased.
 * example 
    * "String" => "StRiNg"
    * "Weird string case" => "WeIrD StRiNg CaSe"
* P
    * convert the string to an array  
    * loop throough the arr using map
    * inside the map method using another map method, change the string to an array and loop through the element 
        * if i % 2 ==0 then change element to upperCase
    * join element and return it 
    * return arr.join(' ')
 */
function toWeirdCase(string) {
    string = string.split(' ').map(subString => {
        return upperOrlowerCase(subString)
    })
    return string.join(' ')
}
function upperOrlowerCase(item) {
    return item.split('')
        .map((e, i) => i % 2 === 0 ? e.toUpperCase() : e)
        .join('')
}