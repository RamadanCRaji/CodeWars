// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array

/*
PREP
P:
  two parameters-  array of integers, and an integer
  there will be no strings of numbers inside the array
  parameters will always be an integer
R:
  return true if my point is higher or false if my points is lower
E:
  ([100, 40, 34, 57, 29, 72, 57, 88], 75) should return True"
  ([12, 23, 34, 45, 56, 67, 78, 89, 90], 9) should return False"
  ([29, 55, 74, 60, 11, 90, 67, 28], 21) should return False")
P:
  use the reduce method to get create a single value of the array 
  use array.lenght to get the total number of class points in the array 
  Math.floor to round down 
  use conditionals 
    if (total/arr.length> mypoints) return true else return false
*/

function betterThanAverage(classPoints, yourPoints) {
  let length = classPoints.length;
  classPoints = classPoints.reduce((a, b) => a + b, 0);
  let AverageScore = Math.floor(classPoints / length);
  return yourPoints > AverageScore ? true : false;
}
