// As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(

// So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:

// [1, 1 ,1, 3, 5, 9, 17, 31, ...]
// But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:

// [0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
// Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.

// Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;)

/* 
PREP
P:array of numbers and n
  array will be greater of equal to three
R:
  return the fist n elements- including the next seeded sequence.
  if n===0 return an empty bracket
E:
  [1,1,1], 10], [1,1,1,3,5,9,17,31,57,105] 
  [0,0,1], 10], [0,0,1,1,2,4,7,13,24,44] 
P:
  if arr.length is ===0 return empty 
  final arr.length is <=10
  extract the last three numbers by:
    -arr.length-1,array.length-2 and array.length-3
  use a forEach method to loop through the array
  conditonal inside the block to check if the new array that is being formed is ===n
    if it is not equal to n then continue 
    inside the array use the push method 
*/

function tribonacci(signature, n) {
  let arr = signature.slice(0);
  let empty = [];
  if (arr.length === 0) {
    return empty;
  } else if (arr.length !== 0) {
    arr.forEach((item, index, array) => {
      if (arr.length <= n && item >= 3) {
        let nxt = item + array[index - 1] + array[index - 2];
        arr.push(nxt);
      }
    });
  }
  return arr;
}
