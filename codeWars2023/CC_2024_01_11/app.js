// Filter the number
// Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, can you return the number back to its original state?

// Task
// Your task is to return a number from a string.

// Details
// You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.

/**
 * Parameters
 * String that contains a mix of numbers
 * Return
 * the numbers in the string in the order that they appear
 *
 */
// Example

function filterString(string) {
   // change the string into an array
   // loop through the array using a filter
   // inside the filter method use cbf that uses the string method 'match'method
   // the new array that is returned and then joined and returned
   //    let arrOfNum = Array.from(string)
   //       .filter((e) => e.match(/[0-9]/))
   //       .join("");
   //    return Number(arrOfNum);
   return Number(string.replaceAll(/[a-z]/gi, ""));
}

console.log(filterString("a1b2c3")); //=> 123
console.log(filterString("923jsks923")); //=> 923923
console.log(filterString("a4rfk592")); // => 4592
