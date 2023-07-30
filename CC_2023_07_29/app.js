// Return an array containing the numbers from 1 to N, where N is the parametered value.

// Replace certain values however if any of the following conditions are met:
//    If the value is a multiple of 3: use the value "Fizz" instead
//     If the value is a multiple of 5: use the value "Buzz" instead
//     If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
//     N will never be less than 1.
/*
P: input is a single digit that serves as a parameter value
R: return an array equal to arr.length
    If the value is a multiple of 3: use the value "Fizz" instead
    If the value is a multiple of 5: use the value "Buzz" instead
    If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
    N will never be less than 1.
E:
    fizzbuzz(3) -->  [1, 2, "Fizz"]
P:
    use a for let loop 
    check in this order
    if n%3===0 && n%5===0 then return FizzBuzz
    if n%3===0 return fizz
    if n%5===0 buzz
    else arr.push number 
*/
// Return an array
function fizzbuzz(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push("FizzBuzz");
    } else if (i % 3 === 0) {
      arr.push("Fizz");
    } else if (i % 5 === 0) {
      arr.push("Buzz");
    } else {
      arr.push(i);
    }
  }
  return arr;
}
console.log(fizzbuzz(3));
