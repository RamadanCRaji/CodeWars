// Don't give me five!
// In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive! The start number will always be smaller than the end number

// Examples:

// The result may contain fives. ;-)
// The start number will always be smaller than the end number. Both numbers can be also negative!

/*
P:
    input start and end number
    both numbers are inclusive in it
    both numbers can also be negative
R:
    return the count of all numbers except numbers except with a 5 in it.
E:
    1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
    4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
P:
    if a<b do this and a>b then do this
    if a is greate
    loop through array using a for loop and push all numbers into an empty array 
    in the array use filter loop
        purpose is to find the index of number that has 5
            turn the item into a string item.toString()
            then use slice to slit string into array item.toString().split('')
            then use includes method to see if that array hasd 5 in it item.toString().split('').includes('5)
            if it does not include five then return parseInt(item) into another array
    then do array.lenght to get the total number of length in the array 
*/
function dontGiveMeFive(a, b) {
  let arr = [];
  let newArr = [];
  if (a > b) {
    while (a >= b) {
      arr.push(a);
      a--;
    }
    newArr = arr.filter((item) => !item.toString().split("").includes("5"));
  } else {
    while (a <= b) {
      arr.push(a);
      a++;
    }
    newArr = arr.filter((item) => !item.toString().split("").includes("5"));
  }
  return newArr.length;
}
console.log(dontGiveMeFive(1, 90));//yields 72
