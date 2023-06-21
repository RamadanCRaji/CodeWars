// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

/* 
P:
  parameters are an array of positive integers
  array.length is >4
  no floats
R:
  Return the sum of the two lowest positve numbers?
E  
  sumTwoSmallestNumbers([15, 28, 4, 2, 43]), 6 , "Sum should be 6");
  sumTwoSmallestNumbers([3, 87, 45, 12, 7]), 10 , "Sum should be 10");
  sumTwoSmallestNumbers([52, 76, 14, 12, 4]), 16 , "Sum should be 16");
  sumTwoSmallestNumbers([52, 76, 14, 12, 4]), 16 , "Sum should be 16")
P:
 i need to check if the array passed has any negative number if arr does then return 'array contains negative number'
 use the sort method
  sort(a>b:-1:1 ) descending order
  sort(a>b:1:-1 ) descending order
  return arr[0]+array[1]
*/
function sumTwoSmallestNumbers(numbers) {
  numbers = numbers.sort((a, b) => {
    return a > b ? 1 : -1;
  });
  //   console.log(numbers)
  return numbers[0] + numbers[1];
}
