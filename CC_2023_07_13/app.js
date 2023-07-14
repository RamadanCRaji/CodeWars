// The museum of incredible dull things
// The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

// However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

// Task
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

/*
P:
    input will be an array of intergers or an empty array
    do not change the order of the elements that are left
R:
    remove the smallest value and return the rest of the array and it item exist more than once then remove the lowest  index one 
    if array is empty then return the empty array 
E:
    Input: [1,2,3,4,5], output = [2,3,4,5]
    Input: [5,3,2,1,4], output = [5,3,2,4]
    Input: [2,2,1,2,1], output = [2,2,2,1]
P:
    immediately have a condition that checks if array is empty and if it is then return the array right way 
    cannot use sort becuase it retuns a mutatnt of the array 
    I can use Math.Min(...arr) to get the minimum and then use arr.indexOf() to get the index of the exact number
     how can i delete that index?
        loop through the array and compare
        use a arr.filter 
            if items index is not equal to index then return 
        then return final array 
*/
function removeSmallest(arr) {
  if (arr.length === 0) {
    return arr;
  }
  let minNum = Math.min(...arr); // tells me the minimum number in the array
  let indexMin = arr.indexOf(minNum); // grabs me the index of the first minimum in the array. arr has not been mutated so far so this logic will work
  return arr.filter((e, i) => {
    //this will fileter the element who's indexs does not equal indexMin
    if (i !== indexMin) {
      return e;
    }
  });
}
console.log(removeSmallest([2, 2, 1, 2, 1]));
console.log(removeSmallest([5, 3, 2, 1, 4]));
console.log(removeSmallest([1, 2, 3, 4, 5]));
