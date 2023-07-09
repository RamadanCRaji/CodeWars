// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

/*
P: two sepetate string inputs
      - str 
      - ending characters
R: return true if the stated ending characters match that of the strings 

E:
solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false

P:
  i can use a for of loop to loop though ending.length
  each loop grabs the str[str.length-i character]
  then i can arr.unshift the character
  use a tenarty operator for comparison 
*/

function solution(str, ending) {
  let charStr;
  let arr = [];
  let end = ending.split("");
  str = str.split("");
  for (let i = 1; i <= end.length; i++) {
    arr.unshift(str[str.length - i]);
  }
  charStr = arr.join("");
  return charStr === ending ? true : false;
}

//or
function solution(str, ending) {
  let l = ending.length;
  let charStr = str.slice(-l); // grabs the last three letters from the back of the string
  return charStr === ending;
}

//or
function solution(str, ending) {
  return str.endswith(ending);
}


