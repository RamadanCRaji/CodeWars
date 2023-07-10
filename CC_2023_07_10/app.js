// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

/*
P: 
    An input of integers
    only one integer will appear odd times 
R: return the integers that appeat an odd numbers of times
E: [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

P:
    using a for off loop because i need to perfrom an operation for each of the element
    loop through the array. One outer array and  one inner array to compare how many times that number appeared 
    inside the first for loop there will be a counter that i set =0 
    every time we encounter an equal comparison we increament by one 
    at the end we see if counter%2!==0 then return that number
*/
function findOdd(A) {
  let counter;
  let oddNumAnswer;
  for (const x of A) {
    counter = 0;
    oddNumAnswer = x;
    for (const y of A) {
      if (y === x) {
        counter = counter + 1;
      }
    }
    if (counter % 2 !== 0) {
      return oddNumAnswer;
    }
  }
}
console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));
console.log(findOdd([1,1,2]));
