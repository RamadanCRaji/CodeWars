// Write a function that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

// Examples:
// "String" => "StRiNg"
// "Weird string case" => "WeIrD StRiNg CaSe"

/**
 * only paramters are strings 
 * return string with all charaters in each word at even index capitalized
 * example
    * "String" => "StRiNg"
    * "Weird string case" => "WeIrD StRiNg CaSe"
*P:
    split the string to array 
    loop through arr using map
        inside loop through the item itself again 
            return insde here have a condition if index%2===0 ? e.toUpperCase() :e.toLowerCase() 
            then join it 
    return str at the end 
 */
function toWeirdCase(string) {
    string = string.split(' ').map(e => {
        return e.split('')
            .map((item, index) => index % 2 === 0 ? item.toUpperCase() : item.toLowerCase()).join('')
    })
    return string.join(' ')
}
console.log(toWeirdCase("String"))
console.log(toWeirdCase("Weird string case"))
console.log(toWeirdCase("This is a test"))

