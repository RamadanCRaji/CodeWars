// Given a string s. You have to return another string such that even-indexed and odd-indexed characters of s are grouped and groups are space-separated (see sample below)

// Note:
// 0 is considered to be an even index.
// All input strings are valid with no spaces
// input: 'CodeWars'
// output 'CdWr oeas'

// S[0] = 'C'
// S[1] = 'o'
// S[2] = 'd'
// S[3] = 'e'
// S[4] = 'W'
// S[5] = 'a'
// S[6] = 'r'
// S[7] = 's'

/**
 * Paramerters
    * input will be a string
 * Return
    * return even indexed of the string sorted and grouped and the odd indexed sorted and grouped

 */
function sortMyString(S) {
   /**
    * change string into an array using str.split()
    * create two variables each called odds and the other called evens
    * loop through the array using a forEach
    * on iteration, check if current item is odd or even then con to apprpriate string
    * return using template literal
    */
   let odds = "";
   let evens = "";
   let arrOfstrChars = S.split("");
   arrOfstrChars.forEach((c, i) => (i % 2 === 0 ? (evens += c) : (odds += c)));
   return `${evens} ${odds}`;
}
console.log(sortMyString("CodeWars")); //=> CdWr oeas => 'CdWr oeas'
console.log(sortMyString("Mike")); //=> Mk ie  => 'Mk ie'
