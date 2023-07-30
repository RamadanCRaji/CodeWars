// Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

/*
P:
    A 2D array of only integers
R:
    find the sum of the minimum values in each sub array
E:
    [ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
, [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
, [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
]
sum is 1+5+20=26
P:
    declare and assign a counter variable and set it equal to 0
    use a forEach loop to loop through the array 
    use a Math.min and increament the counter number with the bvalu
    retun value 

*/
function sumOfMinimums(arr) {
  let sumTotal = 0;
  arr.forEach((item) => {
    console.log(item)
    let value = Math.min(...item);
    sumTotal += value;
  });
  return sumTotal;
}
console.log(
  sumOfMinimums([
    [11, 12, 14, 54],
    [67, 89, 90, 56],
    [7, 9, 4, 3],
    [9, 8, 6, 7],
  ])
); //should yield 76
