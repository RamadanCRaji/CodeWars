// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers (Haskell: a tuple).

// For example:

// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// Another example (just to make sure it is clear):

// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

/*
P:
    an array of triplet only integers as elements
R:
    return the index of the numerical element that lies between the other two elements.
E:
    gimme([2, 3, 1]) => 0
P:
    sort the array in ascending order 
    get middle item using arr[1]
    then use indexOf() to find the index of the element between the two elements

*/
function gimme(triplet) {
  let arr = [...triplet].sort((a, b) => a - b); // this gives me the element
  let item = arr[1]; //and now i need to find the index of that ele
  return triplet.indexOf(item);
}
console.log(gimme([2, 3, 1])); // 1,2,3
