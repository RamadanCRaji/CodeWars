// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

/**
 Paramaters
    INPUT= ARR
 Returns
    Return newArr with all 0 moved to the end and preserving the order
 
 P
    filter inital arr where e !== 0 
    filter the initial arry wher e===0
    combine the two new arrays formed with arr.concat and return that value;
 */

//Example-
console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]), [
   false,
   1,
   1,
   2,
   1,
   3,
   "a",
   0,
   0,
]);

function moveZeros(arr) {
   let arrOfNonZeros = arr.filter((e) => e !== 0);
}
