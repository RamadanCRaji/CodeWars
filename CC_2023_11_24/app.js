// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

/**
 * parameters
    * two arrays all with integers
* return 
    * sum  of both arrays
 */
function arrayPlusArray(arr1, arr2) {
    // join both arrays with arr.concat
    // use reduce  method of an arr 
    // return the final result
    let finalSum = arr1.concat(arr2).reduce((acc, nextItem) => acc + nextItem, 0)
    return finalSum
}


console.log(arrayPlusArray([1, 2, 3, 4], [1, 1, 1, 1])) // => 15