// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

// Examples:(Input --> Output)
/*
PREP
P:input is always an integer
R: return the next perfect square after the parameter passed in
E:
    121 --> 144
    625 --> 676
    114 --> -1 since 114 is not a perfect square
P:
    declare a global varible as a place holder called num
    first check if parameter is a perfect square
    if it is not a perfect square then return -1
    if true 
        use a while loop because i do not know how long it will keep going 
        condtion in my loop will check if Math.sqrt(num) % 1 gives me a remainder and if it does it will run the code body. The loop will keep running until condition is false ()
        return the number
*/
function findNextSquare(sq) {
  let num = sq + 1;
  sq = Math.sqrt(sq);
  if (sq % 1 !== 0) {
    return -1;
  } else if (sq % 1 == 0) {
    while (Math.sqrt(num) % 1 !== 0) {// aka it has a remainder
      num++;
    }
  }
  return num;
}
