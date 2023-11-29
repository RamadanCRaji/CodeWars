// Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

// For example:

// ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
// ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
// ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]


/**
 * Parameters 
    * taking an array of numbers
    * elements of array > or < -1 
    * array will always contain an even numbers
* Return 
 * return a new array containg the last three even numbers of the sequence
 * no duplicate
* Psuedocodes
    * loop through array with array.filter()
        * check if current item is even && return if true 
    * a number of values intended to return in the arr.slice so it always gives n number of last even digits
    * use arr.slice(-n) and return array 
 */

function evenNumbers(arr,n) {
    let newArr = [...arr].filter(e => e % 2 === 0)
        .slice(-n)
    return newArr
}
console.log(evenNumbers(([1, 2, 3, 4, 5, 6, 7, 8, 9]))) //=>  [4, 6, 8]
console.log(evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26])) //=>  [4, 6,8]