// Your task is to write a function which returns the sum of following series upto nth term(parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// Rules:
// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return 0.00

// You will only be given Natural Numbers as arguments.

// Examples:(Input --> Output)
// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

/**
 * parameters
 * numbers
 * neutral numbers
 *  return
 * the sum of the series up to n
 * ans round to 2 decimal places
 */

//example
function SeriesSum(n) {
   // use a for loop
   //create an initial value that keeps track of addtion
   // add ito initial value on each turn up until n

   // use the tofixed() to specify the decimal place value to be used
   let counter = 0;
   for (let i = 0; i < n; i++) {
      counter = counter + 1 / (i * 3 + 1);
   }
   return counter.toFixed(2).toString();
}
// from 1/1 to 1/4 i need to add 3 to the denomiator

console.log(SeriesSum(2)); // 1/1 + 1/4=>1.25
console.log(SeriesSum(4)); // 1,1,2,1,1,1,1 => 5
