// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

function powersOfTwo(n) {
   let ans = Array.from({ length: n + 1 }).map((_, i) => Math.pow(2, i));
}

/**
 P
    input is  an integer
R
    return a list of powers of two,up to n
P
    create an Array up until n using Array.from()
    create an iterable object with prop of length:n+1;
    loop through array with map and use math.pow()
    
 */

// Examples
// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

function powersOfTwo(n) {
   let ans = Array.from({ length: n + 1 }).map((_, i) => {
      return Math.pow(2, i);
   });
   return ans;
}
