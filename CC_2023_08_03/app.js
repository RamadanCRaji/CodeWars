// DESCRIPTION:
// You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

// For example:

// Let's say you are given the array {1,2,3,4,3,2,1}:
// Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.

// Let's look at another one.
// You are given the array {1,100,50,-51,1,1}:
// Your function will return the index 1, because at the 1st position of the array, the sum of left side of the index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.

// Last one:
// You are given the array {20,10,-80,10,10,15,35}
// At index 0 the left side is {}
// The right side is {10,-80,10,10,15,35}
// They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
// Index 0 is the place where the left side and right side are equal.

// Note: Please remember that in most programming/scripting languages the index of an array starts at 0.

// Input:
// An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.

// Output:
// The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.

// Note:
// If you are given an array with multiple answers, return the lowest correct index.

/*
P:
    input of array with integers 
    array might contain multiple answer
    current index is not included in the calulation 
    empty arrays equal 1 
R:
    return the index N where sum of integers to the left of N equal sum of integers to the right of N
    If no index return -1 
P:
    build a stand alone function 
    let answer=-1;
    array.forEach
        this finds the index of an element that meets the criteria 
    I know i am doing some sort of summing so i can use array.reduce inside this function
    get index,element and array
    split the array arr.slice and assign each array to a variable then reduce it 
       let arr1= (0,index).reduce this gives me the left side of the arr excluding 'e'
        let arr2=(index+1).reduce  this will give me the rest of the arr
    checking to if the arr1.reduce ===arr2 
    if true, set the value of anserr=the index then break
*/

function findEvenIndex(arr) {
    let answer = -1;
    //{1,2,3,4,3,2,1}
    try {
        arr.forEach((e, i, array) => {
            let arr1 = array.slice(0, i).reduce((a, b) => (a) + (b), 0) // this is left side of the array excluding 'e' itself
            let arr2 = arr.slice((i + 1)).reduce((a, b) => (a) + (b), 0) // this is all the elements to the right of 'e'
            if (arr1 === arr2) {
                answer = i;
                throw 'error'
            }
        })
    } catch (error) {
        console.log('found it')
    }
    return answer
}
console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]));
console.log(findEvenIndex([20, 10, -80, 10, 10, 15, 35]));

