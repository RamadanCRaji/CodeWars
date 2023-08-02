// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.

/*
P:
    parameter is an array of sorted integers 
    input will always be valid and output will be one answer
R:
    return "yes, ascending" if array is sorted in ascending order
    return yes, descending" - if the numbers in the array are sorted in a descending order
    else return  "no" - otherwise
P:
    extract the last index (Z) and first index (A)
    use the compariosn operators 
    sort the array in both descending and ascending order
    change all arrays to strings 
    compare them and return appropriate values 

*/
function isSortedAndHow(array) {
    let asOrderStr = [...array].sort((a, b) => a - b).join(''); // sorts in ascending
    let desOrderStr = [...array].sort((a, b) => b - a).join('');

    if (asOrderStr === array.join('')) { return 'yes, ascending' }
    else if (desOrderStr === array.join('')) { return 'yes, descending' }
    else { return 'no' }
}

console.log(isSortedAndHow([4, 2, 30]))
