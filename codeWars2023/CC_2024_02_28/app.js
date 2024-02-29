// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

/*
parameters
  input will be a nonempty array 
return
  an array every second element removed as arry was provided
P
  loop through the array using filter
  create a helper function to check if elemlent is second 
    if c%2 ===0 then it is second element --> reutrn true
    if c%2!==0 return false
  return new array 
*/

function removeEveryOther(arr) {
   const isEvenIndex = (element, index, arr) =>
      index % 2 !== 0 ? false : true;
   let newArr = [...arr].filter(isEvenIndex);
   return newArr;
}
//Examples
console.log(removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep"]), [
   "keep",
   "keep",
   "keep",
]);
console.log(removeEveryOther([1, 2, 3, 4, 5, 6], [1, 3, 5]));
