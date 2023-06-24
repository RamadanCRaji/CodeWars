// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

/*
PREP
P: input is are postive integers only that indicate the row number
R: return the sum of all odd numbers in tha row 
E: 
    rowSumOddNumbers(1)--> 1
    rowSumOddNumbers(42)--> 74088
P:
each number in a row is increasing by 2
    sum odd numbers in row 3 is 27 (7 + 9+11=27)...3^3 
    sum odd numbers in row 4 is 64 (13 +15+17+19=64) ...4^3=64
use math.power(n,3)
*/

function rowSumOddNumbers(n) {
    return Math.pow(n, 3);
  }
  