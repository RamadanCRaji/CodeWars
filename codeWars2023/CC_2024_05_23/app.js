// Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.

// Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,

// solve(["abode","ABc","xyzD"]) = [4, 3, 1]
// See test cases for more examples.

// Input will consist of alphabet characters, both uppercase and lowercase. No spaces.

/**
 input is an array of subStrings, notCase sensitive
 return an array of number of letters in each subs occupying the same position in the alphabet
    - loop through the input using map
    - pass cfb
        - split the current charcter into arr and apply filter method on it
        - check if current index of element is === indexOf(e) in alphabeticalString
        - return lengh of array
        - convert all items to lowerCaseFirst
 */

function solve(arr) {
   let wholeAlphabet = "abcdefghijklmnopqrstuvwxyz";
   let ans = [...arr].map((currentWord) => {
      return currentWord
         .toLowerCase()
         .split("")
         .filter((letter, index) => index === wholeAlphabet.indexOf(letter))
         .length;
   });
   return ans;
}
//Example
// console.log(solve(["abode", "ABc", "xyzD"])); //=>[4,3,1]
solve(["abode", "ABc", "xyzD"]);
solve(["abide", "ABc", "xyz"]);
