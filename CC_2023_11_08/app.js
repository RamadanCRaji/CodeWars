// In this kata you will create a function that takes in a list and returns a list with the reverse order.

// Examples (Input -> Output)
// * [1, 2, 3, 4]  -> [4, 3, 2, 1]
// * [9, 2, 0, 7]  -> [7, 0, 2, 9]

// taking in an array
// return the array reserved
/**
 * use a spread synthax on the parameter
 * use reverse method on the array 
 * return final product 
 */
function reverseList(list) {
    let newList = [...list];
    return newList.reverse()
}


console.log(reverseList([-1, 2, 5, 6, 7]))// [7,6,5,2,-1]