// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.

/*
P:
   input is arr [strings of int, int]
R
   return the sum of (int)-sum of (string Int)
P
   loop through the array and filter out strings and also numbers
   use the reduce method obtain the sum of each data type 
   then using reduce to obtain one more final value and return ans 
*/
function divCon(x) {
   let sumOfString = x
      .filter((c) => typeof c === "string")
      .reduce((accum, nextItem) => +accum + +nextItem, 0);
   console.log(sumOfString);
   let sumOfInt = x
      .filter((c) => typeof c === "number")
      .reduce((accum, nextItem) => accum + nextItem, 0);
   return sumOfInt - sumOfString;
}

//Example
const value1 = ["5", "0", 9, 3, 2, 1, "9", 6, 7];
console.log(divCon(value1)); // ==> ans =14
