// Just a simple sorting usage. Create a function that returns the elements of the input-array / list sorted in lexicographical order.
// // input: names - unsorted array
// // output: sorted array
// sortme = function( names ){
// }

/**
 * Paramters
 * input is an array of integers
 * Return
 *  the array with its strings elements sorted lexographically
 */

function sortMe(names) {
   // input th array and spread it to avoid mutation
   // use sort method for array
   // create cbf inside sort method for comaprions --- localeCompare
   let sortedNames = [...names].sort((str1, str2) => str1.localeCompare(str2));
   return sortedNames;
}

// asssuming i did not need to worry about potential accents on strings
function sortme(names) {
   // input th array and spread it to avoid mutation
   // use sort method for array
   // create cbf inside sort method for comaprions --- localeCompare
   let sortedNames = [...names].sort();
   return sortedNames;
}
//Examples
console.log(sortMe(["one", "two", "three"])); //=> ["one", "three", "two"]
