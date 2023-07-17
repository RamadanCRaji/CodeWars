// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
// The returned format must be correct in order to complete this challenge.

// Don't forget the space after the closing parentheses!
/*
PREP
P: array of 10 integers (between 0 and 9) no need to arrage in ascending order
R: String of those numbers in the form of a phone number.
E: createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890")
P:
  use a arr.splice and insert a space infront of 4th idex of the array
  then use arr.splice to insert from behind the index-4
  use arry.splice again and insert at the begining at index of 0
  lastly i then use slice(4,0,) 
  when doing i can do arr.join
  
*/ 
function createPhoneNumber(numbers){
    // [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
  let chars1=numbers.slice(0,3).join('');
  let chars2=numbers.slice(3,6).join('');
  let chars3=numbers.slice(6).join('');
  return `(${chars1}) ${chars2}-${chars3}`
}