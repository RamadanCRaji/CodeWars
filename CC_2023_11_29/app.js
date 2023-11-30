// Your task is to remove all duplicate words from a string, leaving only single(first) words entries.

//     Example:
// Input:
// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
// Output:
// 'alpha beta gamma delta'

/**
 * parameters
  * strings containing words that might  be duplicated
* Return 
  * remove the dupicated words from the string
 */
function removeDuplicateWords(s) {
  // your perfect code...
  // split string to an array
  // use Set to remove duplicates
  // turn the set object in the an array using array.from()
  //join the array and return 
  let arrOfWords = s.split(' ');
  let newSet = new Set(arrOfWords);
  let arrUniquWords = Array.from(newSet);
  return arrUniquWords.join(' ')
}

console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta')) // => 'alpha beta gamma delta'
