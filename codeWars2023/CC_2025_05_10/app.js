// Task:
// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"
// Have fun!

/**
 P
   input is an array 
R
   check is the sum of arr is odd or even

P
   spread the incomeing array into a new one
   loop through the array using reduce method
   sum each item wiht initial value ==0
   check if final value /2===0?'even':odd
 */

function oddOrEven(array) {
   let value = [...array].reduce((acc, nextItem) => acc + nextItem, 0);
   return Math.abs(value) % 2 === 0 ? "even" : "odd";
}

//Example
console.log(oddOrEven([0, -1, -5])); //==> even
console.log(oddOrEven([0, 1, 4])); //==> odd
