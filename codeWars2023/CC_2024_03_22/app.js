// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

// Find max(abs(length(x) − length(y)))

// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

/*
P
  two inputs of arrays with strings
  arrays coudl be empty
R
  the absolute largest diff of string in arr1 and stringin arr2 as 

p
  use a for in loop for the array1
  inside first for..in loop in run another for in loop 
  insided the second for in loop run a the abs differnce and set the value to the variable holding the largest differnce
  return nyumber as string

*/

function mxdiflg(a1, a2) {
   if (!a1.length || !a2.length) {
      return String(-1);
   }
   let maxDiff = 0;
   for (const x of a1) {
      for (const y of a2) {
         if (Math.abs(x.length - y.length) > maxDiff) {
            console.log(x, y);
            maxDiff = Math.abs(x.length - y.length);
         }
      }
   }
   return maxDiff;
}

// examples
// console.log(mxdiflg( ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"], ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"])) // 13

console.log(
   mxdiflg(
      [
         "hoqq",
         "bbllkw",
         "oox",
         "ejjuyyy",
         "plmiis",
         "xxxzgpsssa",
         "xxwwkktt",
         "znnnnfqknaz",
         "qqquuhii",
         "dvvvwz",
      ],
      ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
   )
);
