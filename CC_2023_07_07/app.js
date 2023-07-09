// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

/*
P
  An array of binary numbers
R
  convert the equivalent binary value to an interger
  [0, 0, 0, 1] ==> 1
  [0, 0, 1, 0] ==> 2
  [0, 1, 0, 1] ==> 5
  [1, 0, 0, 1] ==> 9
  [0, 0, 1, 0] ==> 2
  [0, 1, 1, 0] ==> 6
  [1, 1, 1, 1] ==> 15
  [1, 0, 1, 1] ==> 11
P
convert the array to a string and then a number
use parseInt() to convert the number to its decimal base
return number
*/
const binaryArrayToNumber = (arr) => {
  let str;
  console.log(arr);
  str = arr.join("");
  str = parseInt(str, 2);
  return str;
};
