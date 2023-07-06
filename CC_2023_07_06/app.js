// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

/*
P: a string of letters
R: 
    convert each string into characters 
        if char appears once in the string return '('
        if char appears more than once in the string return '('
E:
    "din"      =>  "((("
    "recede"   =>  "()()()"
P:
 convert string to arr and ensure all words are in lower case
 have a for loop on the outside to capture the constant aka the word we need to compare
  - have a counter varible set to zero  
 have another for loop that compares the next word
 if the word exist once then this couter varible will only be 1 else it will be greater than 1
 if greatet than 1 then we return ) else (
  return arr.join 
*/

function duplicateEncode(word) {
    word = word.toLowerCase().split("");
    let arr = [];
    for (let x = 0; x < word.length; x++) {
      let count = 0;
      for (let y = 0; y < word.length; y++) {
        if (word[x] === word[y]) {
          count++;
        }
      }
      count > 1 ? arr.push(")") : arr.push("(");
    }
    return arr.join("");
  }

 console.log(duplicateEncode('jellybeans'))
