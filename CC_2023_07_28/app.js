// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

// Example:

// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

/*
P:
    two dimmensional array 
    input will always be an 2D array
R:
    return array numbers with them sorted in ascending order
E:
   [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]==>  [1, 2, 3, 4, 5, 6, 7, 8, 9]
P:
    use a forEach
    inside the forEach loop use a spread operator and arr.push 
    then return arr.sort(a,b=>a-b)
    then use the sort method and return then new array 
*/

function flattenAndSort(array) {
  let combinedArr = [];
  array.forEach((item) => {
    combinedArr.push(...item);
  });
  return combinedArr.sort((a, b) => a - b);
}
console.log(flattenAndSort([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]));
