// DESCRIPTION:
// Write a function to split a string and convert it into an array of words.

// Examples (Input ==> Output):
// "Robin Singh" ==> ["Robin", "Singh"]

// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]


// the split method is required
// the new array needs to be stored inside of a variable 
// end goal is to spilt a string into an array of words
function stringToArray(string) {
    let arr = string.split(" ");
    return arr;
}
console.log(stringToArray("Robin Singh")) // ["Robin", "Singh"]
