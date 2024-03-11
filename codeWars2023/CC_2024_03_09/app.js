// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

/*
P
  input will be an array  
R
  return a new array where the first is toatl of # > 0 and second element is sum of sum of # <0

PsedoCode
  filter out positive numbers & use arr.length to total +ve #s
  filter the numbers that are <0 and use reduce method and reutrn the sum of -ve #s
  return arr.concate whch shows the desired 

*/
function countPositivesSumNegatives(input) {
   if (!Array.isArray(input) || !input.length) return [];

   let totalPositveNum = input.filter((e) => e > 0).length;
   let sumofNegative = input
      .filter((e) => e < 0)
      .reduce((acc, next) => acc + next, 0);
   return [totalPositveNum, sumofNegative];
}

console.log(
   countPositivesSumNegatives([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
   ]),
   [10, -65]
);
