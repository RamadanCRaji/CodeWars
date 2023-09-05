// DESCRIPTION:
// In this Kata, you will be given an array and your task will be to determine if an array is in ascending or descending order and if it is rotated or not.

// Consider the array [1,2,3,4,5,7,12]. This array is sorted in Ascending order. If we rotate this array once to the left, we get [12,1,2,3,4,5,7] and twice-rotated we get [7,12,1,2,3,4,5]. These two rotated arrays are in Rotated Ascending order.

// Similarly, the array [9,6,5,3,1] is in Descending order, but we can rotate it to get an array in Rotated Descending order: [1,9,6,5,3] or [3,1,9,6,5] etc.

// Arrays will never be unsorted, except for those that are rotated as shown above. Arrays will always have an answer, as shown in the examples below.

// More examples:
// solve([1,2,3,4,5,7]) = "A" -- Ascending
// solve([7,1,2,3,4,5]) = "RA" -- Rotated ascending
// solve([4,5,6,1,2,3]) = "RA" -- Rotated ascending
// solve([9,8,7,6]) = "D" -- Descending
// solve([5,9,8,7,6]) = "RD" -- Rotated Descending

/**
 * a list of numbers sorted
 * return A if array is sorted, D if it is descending, RA if rotated Ascending or RD is Rotated Descending
 * examples 
*   solve([1,2,3,4,5,7]) = "A" -- Ascending
    solve([7,1,2,3,4,5]) = "RA" -- Rotated ascending
    solve([4,5,6,1,2,3]) = "RA" -- Rotated ascending
    solve([9,8,7,6]) = "D" -- Descending
    solve([5,9,8,7,6]) = "RD" -- Rotated Descending
P:
    sort the array in ascending and descending order and compare 
        if arr1=arrDescending return D
        if arr1=arrAssending return A
    if it is none of those then i am dealing with a rotated array
    use a for loop and loop through the possible combination, swapping out arrays and each time check to see they equal

*/
function solve(arr) {
    // Helper function to compare two arrays
    const isEqual = (a, b) => {
        return a.length === b.length && a.every((val, index) => val === b[index]);
    };

    let arr1 = [...arr].sort((a, b) => a - b);
    let arr2 = [...arr].sort((a, b) => b - a);

    if (isEqual(arr, arr1)) return 'A';
    if (isEqual(arr, arr2)) return 'D';

    for (let i = 0; i < arr.length; i++) {
        arr1 = [arr1.pop(), ...arr1];
        if (isEqual(arr, arr1)) return 'RA';
    }

    for (let i = 0; i < arr.length; i++) {
        arr2 = [arr2.pop(), ...arr2];
        if (isEqual(arr, arr2)) return 'RD';
    }
}
function solve(arr) {
    const isSame = (a, b) => JSON.stringify(a) === JSON.stringify(b);

    let arrAsc = [...arr].sort((a, b) => a - b);
    let arrDesc = [...arr].sort((a, b) => b - a);

    if (isSame(arr, arrAsc)) return 'A';
    if (isSame(arr, arrDesc)) return 'D';

    for (let i = 0; i < arr.length; i++) {
        arrAsc.push(arrAsc.shift());
        if (isSame(arr, arrAsc)) return 'RA';
    }

    for (let i = 0; i < arr.length; i++) {
        arrDesc.push(arrDesc.shift());
        if (isSame(arr, arrDesc)) return 'RD';
    }
}
console.log(solve([5, 9, 8, 7, 6]))
