// Filter the number
// Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, can you return the number back to its original state?

// Task
// Your task is to return a number from a string.

// Details
// You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.

/**
 * Parameters
 * input is string that cotains numbers
 * Return
 *  return the numbers from the string
 *
 *
 */
// Example
const isaNum = (e) => !isNaN(parseInt(e));
function filterString(string) {
   // change string into an array
   // use a filter method
   // inside the filter method, use cbf to check  if the item is a string
   // create a helper function to check if its number of string
   // join the array and use the numbers constructor to return final answer
   let arrOfNum = Array.from(string).filter((e) => isaNum(parseInt(e)));
   console.log(arrOfNum);
   return Number(arrOfNum.join(""));
}

console.log(filterString("a1b2c3")); // => 123
console.log(filterString("a4rfk592")); // => 4592
