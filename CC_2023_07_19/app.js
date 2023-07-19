// There is an array with some numbers. All numbers are equal except for one. Try to find it!
//It’s guaranteed that array contains at least 3 numbers.
//The tests contain some very huge arrays, so think about performance.

/*
P:
    an array of numbers
R:
    the one  unique number that is different 
E:
    findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
    findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
P:
    sort the array in ascending order
    similar numbers will be on one side
    check the left side to see if  the first two numbers are the same, if so then return the last number on the right
    else that means that the unique number will be on the left so return arr[0]
*/

function findUniq(arr) {
  arr = arr.sort((a, b) => a - b); // [ 1, 1, 1, 2, 1, 1 ]==> [ 1, 1, 1, 1, 1, 2] or [ 0, 0, 0.55, 0, 0 ])==> [ 0.55, 0, 0, 0, 0 ])
  if (arr[0] === arr[1]) {
    // i have sorted all the numbers therefore all similar numbers they are grouped together
    // so similar numbers are on one side
    return arr[arr.length - 1];
  } else {
    return arr[0];
  }
}
