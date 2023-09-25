// This kata is designed to test your ability to extend the functionality of built-in classes. In this case, we want you to extend the built-in Array class with the following methods: square(), cube(), average(), sum(), even() and odd().

// Explanation:

// square() must return a copy of the array, containing all values squared
// cube() must return a copy of the array, containing all values cubed
// average() must return the average of all array values; on an empty array must return NaN (note: the empty array is not tested in Ruby!)
// sum() must return the sum of all array values
// even() must return an array of all even numbers
// odd() must return an array of all odd numbers
// Note: the original array must not be changed in any case

/**
 * extend the built class Arr
 * the newly extended should be perfrom sum, find odd and even in arr, average of arr, find the cube and square
 * example
    * numbers.square();  // must return [1, 4, 9, 16, 25]
    * numbers.cube();    // must return [1, 8, 27, 64, 125]
 * pseudocode 
    * access arr protoype using es5 synthax
        * obj.prototype.methodName=fucntion (arg){}
    * for sum, use arr.reduce
    * for even and add use filter
    * for square and cube use arr.map
    * for average invoke this.sum and use arr.length 
 */
Array.prototype.sum = function () {
    return this.reduce((sum, currentItem) => sum + currentItem, 0)
}
Array.prototype.even = function () {
    return this.filter(e => e % 2 === 0)
}
Array.prototype.odd = function () {
    return this.filter(e => e % 2 !== 0)
}
Array.prototype.cube = function () {
    return this.map(e => e * e * e)
}
Array.prototype.square = function () {
    return this.map(e => e * e)
}
Array.prototype.average = function () {
    if (this.length === 0) return NaN
    return this.sum / this.length
}

let numbers = [1, 2, 3, 4, 5];
console.log(numbers.even())