// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

/*
PREP
P: input is two arrays of integers with varying array.length 
R:
  subract one list from another and return the results
  all values from list a present in list b are removed.
  returned array shoud be kept in order they were  passed as parameter.
E: 
    (arrayDiff([1,2], [1]), [2], "a was [1,2], b was [1]");
    (arrayDiff([1,2,2], [1]), [2,2], "a was [1,2,2], b was [1]");
    (arrayDiff([1,2,2], [2]), [1], "a was [1,2,2], b was [2]");
    (arrayDiff([1,2,2], []), [1,2,2], "a was [1,2,2], b was []");
    (arrayDiff([], [1,2]), [], "a was [], b was [1,2]");
    (arrayDiff([1,2,3], [1,2]), [3], "a was [1,2,3], b was [1,2]")
P:
  i need an empty array where i can push elements into
  i can use a filter method on the array
  inside the filter i can use arr.includes method to see if the current item is present 
  if item is present then do not push it array
  eventually return array

*/

function arrayDiff(a, b) {
  let arrDiff = [];
  a.filter((item) => {
    if (!b.includes(item)) {
      arrDiff.push(item);
    }
  });
  return arrDiff;
}
