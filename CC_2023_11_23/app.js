// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.

/**
 * parameters 
    * array of integer nums
    * 
* return 
    * array with opposite input
 */

function invert(array) {
    //map through input
    // check if item is <0
    // based on what helper returns invert in 
    // if its > 0 return -item else Math.abs()
    let newArr = [...array].map(e => {
        return e === Math.abs(e) ? -e : Math.abs(e)

    })
    return newArr
}

//example
console.log(invert([1, 2, 3, 4, 5]))// => [-1,-2,-3-,4,-5]
console.log(invert([1, -2, 3, -4, 5]))//=> [-1,2,-3,4,-5]
console.log(invert([]))//=> []