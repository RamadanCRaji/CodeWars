// Complete the solution so that it takes the object (JavaScript/CoffeeScript) or hash (ruby) passed in and generates a human readable string from its key/value pairs.

// The format should be "KEY = VALUE". Each key/value pair should be separated by a comma except for the last pair.

// Example:

// solution({a: 1, b: '2'}) // should return "a = 1,b = 2"

/**
 * Parameters
    * input will be on obects
 * Return
    * return the key-pair values as strings
 
 */

function solution(object) {
   // create a variable that hold all the new strings
   // loop through the object using a for in loop
   // on each loop, use template literal to create desired key-value pairs as strings
   // at the end we return the new string
   let newObjStr = "";
   for (const props in object) {
      newObjStr += `${props} = ${object[props]},`;
   }
   //    console.log(newObjStr.split(","));
   return (newObjStr = newObjStr.split(",").filter((e) => e !== "")).join(",");
   // remove the last
}
//Example
console.log(solution({ a: 1, b: "2" })); //=> 'a=1,b=2'
