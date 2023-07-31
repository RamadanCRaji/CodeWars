// Haskell has some useful functions for dealing with lists:

// $ ghci
// GHCi, version 7.6.3: http://www.haskell.org/ghc/  :? for help
// λ head [1,2,3,4,5]
// 1
// λ tail [1,2,3,4,5]
// [2,3,4,5]
// λ init [1,2,3,4,5]
// [1,2,3,4]
// λ last [1,2,3,4,5]
// 5
// Your job is to implement these functions in your given language. Make sure it doesn't edit the array; that would cause problems! Here's a cheat sheet:

// | HEAD | <----------- TAIL ------------> |
// [  1,  2,  3,  4,  5,  6,  7,  8,  9,  10]
// | <----------- INIT ------------> | LAST |

// head [x] = x
// tail [x] = []
// init [x] = []
// last [x] = x

/*
P:
    any of these funtcions can be called head(),tail(), init(), and last() on any array of numbers
R:
    if head fucntion is called return the first number in the array
    if tail return all array numbers aside from the first index
    if init return the rest of the numbers aside from last index
    if last then only return the last idex value 
E:
    head([1,2,3,4,5]); => 1
    tail([1,2,3,4,5]); => [2,3,4,5]
P:
    create a function using the slice method on all 
*/
function head(arr) {
    return Number(arr.slice(0, 1).join(''));
}
function tail(arr) {
    return arr.slice(1);
}
function init(arr) {
    return arr.slice(0, -1)
}
function last(arr) {
    let value = Number([arr.pop()]);
    return value;
}
console.log( head([1,2,3,4,5]))// ==>1