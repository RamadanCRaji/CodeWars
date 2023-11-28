// Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

// Notes
// Array/list size is at least 2.

// Array/list numbers could be a mixture of positives, negatives also zeroes .

/**
 * paramerters
    * array of input >=2
    * elements could be  < || >= 0
 * Return
    * max number of product obtained btw adjacent number
 * 
 * psudeoCode
    * use reduce method 
    * first iteration check if i==0 && set maxValue= arr[1]*arry[0]
    * second time check if the the product of the current numer * previous number is greater than the current max value and if it's true then max value equals current product      
 * 
 */

function adjacentElementsProduct(array) {
    let maxValue;;
    for (let i = 1; i < array.length; i++) {
        if (i === 1) {
            maxValue = array[i] * array[i - 1]
        }
        else if (array[i] * array[i - 1] > maxValue) { maxValue = array[i] * array[i - 1] }
    }
    return maxValue;
}

// another solution

/**
 * create an empty array 
 * push the product of the current number and previous one inside empty array 
 * use Math.max to find the max number and return that number
 */
function adjacentElementsProduct(array) {
    let arr = [];
    for (let i = 1; i < array.length; i++) {
        arr.push(array[i] * array[i - 1])
    }
    return Math.max(...arr)
}
console.log(adjacentElementsProduct([2, 6]))// => 12
console.log(adjacentElementsProduct([1, 2, 3, 4]))// => 12
console.log(adjacentElementsProduct([2, 6, 7]))// => 42
console.log(adjacentElementsProduct([-2, -6, 7])) // 12 


    // return array.reduce((mult, nextItem) => {
    //     let maxNum = mult * nextItem;
    //     let ishigher;
    //     //first time it runs mult=1 and nextItem=1  (1*1)--> 1
    //     // second time it runs mult=reuslt*nextitem ((1*) *2)---> 2
    //     // third time
    // }, 1)