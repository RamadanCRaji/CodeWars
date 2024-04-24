// JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

// The solution would work like the following:

// getEvenNumbers([2,4,5,6]) // should == [2,4,6]

/**
 P
    inputs will be an array of numbers
 R
    return a new array with only even numbers
 
 P
    loop through the array using arr.filter
    check condition e%2===0
    return ans
 */

//example
console.log(getEvenNumbers([2, 4, 5, 6])); // ==> 2,4,6
console.log(getEvenNumbers[(1, 9, 5, 1)]); //[]

function getEvenNumbers(arr) {
   let ans = arr.filter((e) => e % 2 === 0);
   return ans ? ans : [];
}
