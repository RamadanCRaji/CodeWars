/* 
Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.
*/

/* 
PREP
P:input will be integers. 
    if flower1==even and flower2===odd then return true( meaning they are inlove)
R: return true if inlove and false if not
E: 
    lovefunc(1,4), true
    lovefunc(2,2), false 
    lovefunc(0,1), true
P:
    use an if statment to check for conditions
    if flower1==even and flower2===odd then return true( meaning they are inlove)
    if (flower1==odd and flower2===even then return true( meaning they are inlove)
    else return false
*/

// function lovefunc(flower1, flower2) {
//   // moment of truth
//   if (flower1 % 2 == 0 && flower2 % 2 !== 0) {
//     return true;
//   } else if (flower1 % 2 !== 0 && flower2 % 2 == 0) return true;
//   else {
//     return false;
//   }
// }
//refractor code

function lovefunc(flower1, flower2) {
  // moment of truth
  if (
    (flower1 % 2 == 0 && flower2 % 2 !== 0) ||
    (flower1 % 2 !== 0 && flower2 % 2 == 0)
  ) {
    return true;
  } else {
    return false;
  }
}
