// In this Kata, you will be given an array of arrays and your task will be to return the number of unique arrays that can be formed by picking exactly one element from each subarray.

// For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

// Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.

// See test cases for more examples.

// Good luck!


/**
 * parameters 
    * taking in an array of sub Array
    * ignore dupplicates in arrays
* Return  # of unique arrays i can create if i pick one element from each array
Pseudocode
    * find the unique numbers and multiply then together 
    * create a map => new array with dupes removed [[1,2],[4,4],[5,6,6]]=> [[1,2],[4],[5]]
    * i can remove any dupliate using
    * then get the lenght 
    * use a reduce to get the method
 */

function solve(arr) {
    return arr.map(sS => new Set(sS)).reduce((acc, current) => acc * current.size, 1)
    //[[1,2],[4,4],[5,6,6]]=> [[1,2],[4],[5]]
}
console.log(solve([[1, 2], [4], [5, 6]]))// => 4 possibilites [1,4,5],[1,4,6],[2,4,5],[2,4,6]
console.log(solve([[1, 2], [4, 4], [5, 6, 6]])) // => 4 [1,4,5], [1,4,6],[2,4,6],[2,4,5]

//ask them what what i am taking in and ask if there are funny  business with the parameters (give examples of potential funny business )
// then after wlaking though the examples then state so it seems like as i am walkig through this problem the primary i have to do is (and then tell them what you think you need to do)
// then after this start writing down what you just talked about with them 
// i noticed you already gave me a function name so i will keep thhat 
// then go ahead and console.log the function and what you think the output will be, yes you verbally talked about it before but now you will write it down 