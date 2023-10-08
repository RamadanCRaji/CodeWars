// In this Kata, you will be given an array and your task will be to determine if an array is in ascending or descending order and if it is rotated or not.

// Consider the array [1,2,3,4,5,7,12]. This array is sorted in Ascending order. If we rotate this array once to the left, we get [12,1,2,3,4,5,7] and twice-rotated we get [7,12,1,2,3,4,5]. These two rotated arrays are in Rotated Ascending order.

// Similarly, the array [9,6,5,3,1] is in Descending order, but we can rotate it to get an array in Rotated Descending order: [1,9,6,5,3] or [3,1,9,6,5] etc.

// Arrays will never be unsorted, except for those that are rotated as shown above. Arrays will always have an answer, as shown in the examples below.

// More examples:



// Input is an array 
//  * Return A if array is sorted, D if it is descending, RA if rotated Ascending or RD is Rotated Descending
// Example
// solve([1,2,3,4,5,7]) = "A" -- Ascending
// solve([7,1,2,3,4,5]) = "RA" -- Rotated ascending
// solve([4,5,6,1,2,3]) = "RA" -- Rotated ascending
// solve([9,8,7,6]) = "D" -- Descending
// solve([5,9,8,7,6]) = "RD" -- Rotated Descending

//PseudoCode
/**
 * sort input into descending and ascending order
 * create helper fucntion to check if input is either equal to arrAscending or arrDescending
 *  if arrAscending ===arr return A 
 *  if arrDescending ===arr return D 
 * use a for loop that continues to rotate the arrAscending and checks if it the same as input. likeWise for arrDescending
 */

function solve(arr) {
    const isSame = (a, b) => JSON.stringify(a) === JSON.stringify(b);


    let arrAsc = [...arr].sort((a, b) => a - b)
    let arrDesc = [...arr].sort((a, b) => b - a)

    if (isSame(arrAsc, arr)) return 'A'
    if (isSame(arrDesc, arr)) return 'D'

    for (let i = 0; i < arr.length; i++) {
        // if it is rotating ascending
        arrAsc.unshift(arrAsc.pop())
        if (isSame(arrAsc, arr)) { return "RA" }
    }
    for (let i = 0; i < arr.length; i++) {
        // if it is rotating descending
        arrDesc.unshift(arrDesc.pop())
        if (isSame(arrDesc, arr)) { return 'RD' }
    }
}