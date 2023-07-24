// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

/*
P
  array of numbers with a limit value 
R:
 return true if all values <= limit value esle return false
E:
  smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100) ==> false
P:
  use array.every method to see if all values meet the criteria of callback function 
*/

function smallEnough(arr, limit) {
  return arr.every((item) => item <= limit);
}
smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100); // ==> false
smallEnough([101, 45, 75, 105, 99, 107], 107); //==> true
