// Sum of Odd Cubed Numbers
// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

/*
P:array of integers
R:
    return the sum of odd numbers within an array 
E:
    [1, 2, 3, 4]), 28
    [-3,-2,2,3],0
P:
 find the odd numbers and push them to a seperate arr
 check to see if values are not numbers using regexs 
 use arr.map
    inside map, we cube numbers using math.pow
    then have a conditonal checks is item is odd
    if it is then return 
    use arr.reduce to find sum
*/
function cubeOdd(arr) {
  let newArr = [];
  let strArr = arr.join("");
  if (strArr.match(/\D/)) {
    return undefined;
  } else {
    arr.forEach((item) => {
      let cubeNum = Math.pow(item, 3);
      if (cubeNum % 2 !== 0) {
        newArr.push(cubeNum);
      }
    });
  }
  return newArr.length === 0 ? 0 : newArr.reduce((a, b) => a + b, 0);
}
console.log(cubeOdd([1, 2, 3, 4]));
