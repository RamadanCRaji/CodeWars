// vowelOne
// Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.

// All non-vowels including non alpha characters (spaces,commas etc.) should be included.

// Examples:

// vowelOne( "abceios" ) // "1001110"

// vowelOne( "aeiou, abc" ) // "1111100100"

function vowelOne(s) {
   let ans = s.split("").map((item) => {
      if ("aeiou".includes(item.toLowerCase())) {
         return "1";
      } else {
         return "0";
      }
   });
   return ans.join("");
}
function efficientVowelOne(s) {
   return ans.replaceAll(/[aeiou]/gi, 1).replaceAll(/[^aeiou]/gi, 0);
}
