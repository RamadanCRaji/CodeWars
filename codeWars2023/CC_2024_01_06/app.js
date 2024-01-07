// Oh no!
// Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!

// You need to cast the whole array to the correct type.

// Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.

// ie:["1", "2", "3"] to [1, 2, 3]

// Note that you can receive floats as well.

/**
 *Parameters 
    * an array string numbers 
    * input will never be str but the string numbers can be floats
 * return 
    * an output of number squence
 * 

 */
function toNumberArray(stringarray) {
   /***
    * loop through the array using usign a map
    * inside the map method, use an ananymous cbf
    * inside the cbf using a the Numbers constructor to change the element into a number
    * Return final array result
    */
   let numberArr = [...stringarray].map((e) => Number(e));
   return numberArr;
}
console.log(toNumberArray(["1", "2", "3"])); //=> [1,2,3]
