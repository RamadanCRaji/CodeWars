/*
P:input are integers either positives 
R: 
  the sum of numbers between then
E:
  (1, 0) --> 1 (1 + 0 = 1)
  (1, 2) --> 3 (1 + 2 = 3)
  (0, 1) --> 1 (0 + 1 = 1)
P:
  turn the input into an array and use a sorting method to organize them from smalles to largest
  scenerios that could happen 
   if a ===b then return a 
   if a and b are both positive
   if a is negative and b is positive
   if a is positive and b is nagative
   if is a and are both negative 
*/

function getSum(a, b) {
  let newArr = [];
  if (a === b) {
    return b;
  } else if (a < 0 && b > 0) {
    for (let i = a; i <= b; i++) {
      newArr.push(i);
    }
  } else if (a > 0 && b < 0) {
    for (let i = b; i <= a; i++) {
      newArr.push(i);
    }
  } else if (a > 0 && b > 0 && a < b) {
    for (let i = a; i <= b; i++) {
      newArr.push(i);
    }
  } else if (a > 0 && b > 0 && b < a) {
    for (let i = b; i <= a; i++) {
      newArr.push(i);
    }
  } else if (a < 0 && b < 0 && a < b) {
    for (let i = a; i <= b; i++) {
      newArr.push(i);
    }
  } else if (a < 0 && b < 0 && b < a) {
    // b=-5 a=-1
    for (let i = b; i <= a; i++) {
      newArr.push(i);
    }
  }
  return newArr.reduce((acc, nextItem) => acc + nextItem, 0);
}
// correction

function GetSum(a, b) {
  let newArr = [];
  if (a < b) {
    for (let i = a; i <= b; i++) {
      newArr.push(i);
    }
  } else if (a > b) {
    for (let i = a; i >= b; i++) {
      newArr.push(i);
    }
  }
}
/*
function GetSum(a, b) {
  sum = 0;
  if (a < b) {
    while (a <= b) {
      sum = sum + a;
      a++;
    }
  } else {
    while (a >= b) {
      sum = sum + a;
      a--;
    }
  }
  return tmp;
}

*/
