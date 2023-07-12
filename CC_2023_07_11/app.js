// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples
// 16  -->  1 + 6 = 7
// 942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
/*
P: An integer
R: 
    return a single digit of the sum of numbers in digits n 
    if the value has more than one digit, continue reducing it all the way
E:
16  -->  1 + 6 = 7
// 942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
P:
    declare an empty variable to hold the reduced value 
    A-  convert the number into an array
    B-  reduce the array
    C-  check to see if the array.length is greate than one 
        if it is not then return the value  
        if it is then reapet step 1 through and call the fucntion inside again 

*/
function digitalRoot(n) {
  n = n.toString();
  let arr = Array.from(n);
  let num = arr.reduce((a, b) => {
    return parseInt(a) + parseInt(b);
  }, 0);
  if (num.toString().length === 1) {
    return parseInt(num);
  } else {
    return digitalRoot(num); // want to return a number but it calls fisrt
  }
}
// fn(12345) starts running--> fn(12345) calls fn(15)--> fn(15) starts running --> value is 6 and it says return 6 it will return to fn(15)--> fn (15) will return to fn(12345) will return
