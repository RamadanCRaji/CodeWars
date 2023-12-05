// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

/**
 * paramerters
    * a string 
    * spaces could vary in the string
 * Return a newString without any exclamation marks present
 * 
 */

function removeExclamationMarks(str) {
    //create an empty variable of data type string 
    // use a for..of loop and on each iteration check if item is not a '!' and if not then concate else continue
    // return final answer
    let newString = ''
    for (const x of str) {
        if (x !== '!') {
            newString = newString + x
        }
        else { continue }
    }
return newString
}
console.log(removeExclamationMarks("Hello World!")) //'hello world'

