// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

/*
P:
    input of array integers
R:
    return arr with odd #s sorted while even stay same
E:
    [7, 1]  =>  [1, 7]
    [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
    [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]   
P:
    extract the odd numbers usig array.filter and sort them immediatly. Save arr into varible a variable 
    use map method to loop over original arr
        conditon 
        if num is even then retun num else return the first number if the sorted arr
    this works becuase eventully all odd numbers wil be replaced at the end
*/



function sortArray(array) {
    let sortedOdds = array.filter(e => e % 2 !== 0).sort((a, b) => a - b)
    return array.map(num => num % 2 !== 0 ? sortedOdds.shift() : num)
}
console.log(sortArray([5, 3, 2, 8, 1, 4]))