// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.


/*
P:
    Input is a sequence of strings or array 
R:
    return an array without element with the same value next to each other 
E:
    uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
    uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
    uniqueInOrder([1,2,2,3,3])       == [1,2,3]
P:
    Convert argumet to array using Array.from
    arr.filter will return a new array 
    grab the element and index
    set conditon that checks:
        if item !== arr[index-1] return item
*/
function uniqueInOrder(iterable) {
    let arr = Array.from(iterable).filter((e, i) => e !== iterable[i - 1]);
    return arr;
}
console.log(uniqueInOrder([1, 2, 2, 3, 3]))
console.log(uniqueInOrder('AAAABBBCCDAABBB'))