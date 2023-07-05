// Story
// Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

// Task
// Write a function that returns both the minimum and maximum number of the given list/array.

/*
P: input will be a an array of integers
R: return the maximum and minimum of the array 
E: 
    [1,2,3,4,5] --> [1,5]
    [2334454,5] --> [5,2334454]
    [1]         --> [1,1]
 P
 use the Math.min and Math.max function(...array function)
 store each data into a variable and put them into an array 
 return the array 
*/
function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}
console.log(minMax([2334454, 5]));
