// You get an array of arrays.
// If you sort the arrays by their length, you will see, that their length-values are consecutive.
// But one array is missing!


// You have to write a method, that return the length of the missing array.

// Example:
// [[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3

/**
 * input is an array of arrays
    * there will only be one array
 * create a function that returns the length of the missing array that is not present when the sub arrays arr sorted 
    * aka find the length of the arry that breaks the chronological sorting order
*Example 
    * [[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> when sorted is 5 4 2 1 therefore length of missing array is 3
* PesudoCode 
    * first sort this array in ascending order 
    * map through array and return the length of sub arrays 
    * loop througth the array and each time substarct the previous length for the current number 
        * why do this? well if sorted in a consercutive order then the difference between elements shuld be consistent 
        * [1,2,4,5]
        * [5,4,2,1]
        * take that current number and subtract with from 
    * set conditional if current#-previous# !== previour  - the number beforer previous number
    * then missing number is current number - initial number
 */
function getLengthOfMissingArray(arrayOfArrays) {
    if (arrayOfArrays === null || arrayOfArrays.length === 0 || arrayOfArrays.some(e => e.length === 0) !== 0) {
        return 0
    }
    let subArrLengths = arrayOfArrays.sort((a, b) => a.length - b.length).map(e => e.length)
    console.log(subArrLengths)
    for (let i = 0; i < subArrLengths.length; i++) {
        if (i !== 0) {
            let curValue = subArrLengths[i];
            let preValue = subArrLengths[i - 1];
            let nexVal = (subArrLengths[i + 1]);
            if ((curValue - preValue) !== (nexVal - curValue)) {
                let missingValue = (nexVal - curValue) + 1
                return (missingValue)
            }
        }
    }

}

// code refractoring 
// instead of checking to to see if the differnce between the current number and previous are the same as the difference between the current number and the next number 
// just check to see if differnce between the current number and previous is greater than 1 and if it is then return previous num +1 

function getLengthOfMissingArray(arrayOfArrays) {
    if (arrayOfArrays === null || arrayOfArrays.length === 0 || arrayOfArrays.some(e => !e || e.length === 0)) {
        return 0
    }
    let subArrLengths = arrayOfArrays.sort((a, b) => a.length - b.length).map(e => e.length)
    for (let i = 1; i < subArrLengths.length; i++) {
        if (subArrLengths[i] - subArrLengths[i - 1] > 1) {
            return subArrLengths[i - 1] + 1
        }
    }
}