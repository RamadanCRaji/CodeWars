// square every digit of a number and concatenate them.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)
// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)
// Note: The function accepts an integer and returns an integer.

/*
PREP
P: integers input
R: return an integer with all the numbers squared
E:
squareDigits(3212) --> 9414
squareDigits(2112) --> 4114
P: Convert the input number into an array by using the "Array.from" method and converting it to a string.
Apply the "map" method to transform each element in the array by squaring them using the "Math.square" function.
Use the "join" method to combine the array elements into a single string, and then convert it back to a number using the "Number" function.
'''
*/


function squareDigits(num){
    let arrNum=Array.from(num.toString()).map(item=>Math.pow(item,2));
    return Number(arrNum.join(''))
  }