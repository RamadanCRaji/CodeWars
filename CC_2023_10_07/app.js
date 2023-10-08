// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

/**
 * input is a hyphen or underScore seperted string
 * return the string as camelCased
 * example
    * "The_Stealth_Warrior" gets converted to "TheStealthWarrior"
* use regext to replace all underScore with spaces
* convert STring to array using string.split(' ').
*map throught the array and convert the first charter of each word to campital letter and return it. Do this for all except for arr[0]
 */

function toCamelCase(str) {
    str = str.replace(/-|_|\|/g, ' ')
        .split(' ')
        .map((e, i) => i === 0 ? e : capitalizedFirstLetter(e))
        .join('')
    return str
}
function capitalizedFirstLetter(item) {
    return item.charAt(0).toUpperCase() + item.slice(1)
}
// source ~/.bashrc
console.log(toCamelCase("The_Stealth_Warrior"))
