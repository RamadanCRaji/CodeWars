// You get an array of arrays.
// If you sort the arrays by their length, you will see, that their length-values are consecutive.
// But one array is missing!


// You have to write a method, that return the length of the missing array.

// Example:

// If the array of arrays is null/nil or empty, the method should return 0.

// When an array in the array is null or empty, the method should return 0 too!
// There will always be a missing element and its length will be always between the given arrays.


/**
 * input is a 2D array 
 * find the length of the missing array 
 * example 
    * [[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3
 * Pseudocode 
    * array.length is alwys postive 
    * get the length of each array and sort them in ascending order 
    * use a for loop 
        * since the list is in ascending order the diffence must always be 1 
        * on each iteration check if the differnce of the current array and the one before it is >1
            * if true then add 1 to the previous nummber. This is the  missing array length 
 * 
 */

function getLengthOfMissingArray(arrayOfArrays) {
    if (arrayOfArrays === null || arrayOfArrays.length === 0 || arrayOfArrays.some(e => !e || e.length === 0)) { return 0 }
    let lengthOfArr = subArrLength(arrayOfArrays)
    for (let i = 1; i < lengthOfArr.length; i++) {
        if (lengthOfArr[i] - lengthOfArr[i - 1] > 1) {
            return lengthOfArr[i - 1] + 1
        }

    }
    return 0;
}
function subArrLength(array) {
    return array.map(e => e.length).sort((a, b) => a - b)
}
