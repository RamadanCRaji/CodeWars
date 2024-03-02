// You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

// As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

// For example(Input --> Output):

// 10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//  1 --> [1]

/**
 P:
    input is an integer 
R:
    populate an array up until n and including n
p:
   use Array constructor to create an array with n number of elements
   uses Array.keys to get the index of the array 
   loop through the array with map and and increment the indicies
 */
function monkeyCount(n) {
   return [...Array(n).keys].map((a) => a + 1);
}

//example
console.log(monkeyCount(10), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
