// Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5
// For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

// Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

// For example, decode("h3 th2r2") would return "hi there".

// For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.


/**
 * input is a string
 * return new string where all vowels are replaced with their assigned numbers 
 * create a function that reverses the encoding process 
 * example 
 * enode('hello') --> h2ll4
 * decode("h3 th2r2") would return "hi there"
 * Pseudocode 
 * use a for of loop 
 * inside loop use replaceAll to replace variable on interest 
    * since replaceAll returns a new string set the old string  to the new string
    * 
* to decode use a for of loop
    * check if item is typeOf === number and if it is then subtract 1 from the number 
    * use this number to get the element and replace all the numbers with the new character 
 */
function encode(string) {
    let str;
    let arrOfVowels = ['a', 'e', 'i', 'o', 'u'];
    for (const item of string) {
        if (arrOfVowels.includes(item)) {
            let number = arrOfVowels.indexOf(item) + 1
            string = string.replaceAll(item, number)
        }
        str = string;
    }
    return str;
}
function decode(string) {
    let str;
    let arrOfVowels = ['a', 'e', 'i', 'o', 'u'];
    for (const item of string) {
        const isNum = Number(item);
        if (isNum) {
            let index = parseInt(item) - 1
            let letter = arrOfVowels[index]
            string = string.replaceAll(item, letter)
        }
        str = string;
    }
    return str
}

console.log(encode('hello'))
console.log(encode('hello there'))
console.log(decode("h3 th2r2"))
