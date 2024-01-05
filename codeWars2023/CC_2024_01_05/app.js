// Complete the solution so that it takes the object (JavaScript/CoffeeScript) or hash (ruby) passed in and generates a human readable string from its key/value pairs.

// The format should be "KEY = VALUE". Each key/value pair should be separated by a comma except for the last pair.

// Example:

// solution({a: 1, b: '2'}) // should return "a = 1,b = 2"

/**
 * Parameters
 * input is an object
 * Return
 * Object with each key value pair as as strings
 */

function solution(obj) {
   //create an elemnent and assign and assign it an empty the new obj using spread synthax
   // Object.entries to change the objects key value pairs into sub array
   // loop through it with map and desttruing the elements coming in
   // inside the callback function use template literal to concat potential results and then push into a new array
   // join the array and retun it

   let arrOfString = Object.entries(obj).map(([key, value]) => {
      return `${key} = ${value}`;
   });
   return arrOfString.join(",");
}
// Example:
console.log(solution({ a: 1, b: "2" })); //=> 'a=1,b=2'
