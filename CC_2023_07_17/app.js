// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
/*
P:
    input is string of characters
R:
    return true if it is a panangram or false if not
E:
    "The quick brown fox jumps over the lazy dog"==> true 
P:
    i need to loop over the iterable object
    create a an array containig all the alphabets in english 
    use the arr.every()method to if all elements in the arr are present in the string. we can do this by using str.includes 
    every() will return a boolean 
*/
function isPangram(string) {
  let alphabet = [..."abcdefghijklmnopqurstuvwzy"];
  return alphabet.every((item) => string.toLowerCase().includes(item)); // every item must pass the test implemented by the provided function
}
