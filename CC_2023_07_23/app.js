// The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age,  oldest age].

// The order of the numbers passed in could be any order. The array will always include at least 2 items. If there are two or more oldest age, then return both of them in array format.

// return the two oldest/oldest ages within the array of ages passed in.

/*
P:
    an array of numbers 
R:
    return the two highest numbers- [second oldest, first oldest]
    else if more than one older ages exist just return two in an array 
E:
    [1, 2, 10, 8] --> [8, 10]
    [1, 5, 87, 45, 8, 8] --> [45, 87]
    [1, 3, 10, 0]) --> [3, 10]
P
    sort the array from lowest to highest 
    return arr[arr[arr.length-1],arr[arr.length-2]]
    by doing so we will target both conditionals
*/
function twoOldestAges(ages) {
  ages.sort((a, b) => a - b);
  let secondOldest = ages[ages.length - 2];
  let Oldest = ages[ages.length - 1];
  return [secondOldest, Oldest];
}
console.log(twoOldestAges([1, 5, 87, 45, 8, 8]));
console.log(twoOldestAges([1, 5, 87, 45, 8,87, 8]));
