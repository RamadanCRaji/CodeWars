// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

/*
P:
    array of strings each with varying lengths 
R:
    an array with each strings but ordered fromn shortest  to longest
E:
    ["Telescopes", "Glasses", "Eyes", "Monocles"]==> ["Eyes", "Glasses", "Monocles", "Telescopes"]
P:
    use the arr.sort method 
    inside the sort use str.length and let sort a-b
    store the new array in a new variable 
*/

function sortByLength(array) {
  // Return an array containing the same strings, ordered from shortest to longest
  let newArray = array.sort((a, b) => a.length - b.length); //a >b:1
  return newArray;
}
console.log(
  (sortByLength(["", "Moderately", "Brains", "Pizza"]),
  ["", "Pizza", "Brains", "Moderately"])
);
console.log(sortByLength(["Longer", "Longest", "Short"]), [
  "Short",
  "Longer",
  "Longest",
]);
console.log(sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"]));
