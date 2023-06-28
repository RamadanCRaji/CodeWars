/*
P:
  integer numbers, no non integers
R:
  return true if the number is perfect square and false if not
E:
  -1  =>  false
  0  =>  true
  25  =>  true
  26  =>  false
P:
  if statements are required:
    i can use the math function to find the square
    get a value and name it sqrtValue
    check if n<0 and if it is then return false
    have a condition that checks if math.pow(sqrtValue)===n or see if that array includes a .
*/

var isSquare = function (n) {
  if (n < 0) {
    return false;
  } else {
    let sqrtValue = Math.sqrt(n);
    let arr = Array.from(sqrtValue.toString());
    if (arr.includes(".")) {
      return false;
    } else {
      return true;
    }
  }
};
