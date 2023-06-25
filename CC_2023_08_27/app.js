// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

/*
P:
    input is a string, only one parameter
R:
    return true is the two arguments given are anagrams of each other
E:
    "foefet" is an anagram of "toffee"

    "Buckethead" is an anagram of "DeathCubeK"
P:
    first check if both length are the same and if they are not then return false 
    use str.every to see if  char in str1 are all in str2 and return based on that 
*/
// write the function isAnagram
function isAnagram(test, original) {
    if (test.length !== original.length) return false;

    return original.toLowerCase().split('')
        .every(e => test.toLowerCase()
            .split('')
            .includes(e))

}
console.log(isAnagram("aabc", "aabb")) /*
there is a flaw in this code 
when you use .includes(e) inside the .every() method, it checks if the character "e" exists anywhere in the test string. 
It doesn't care if "e" appears more times in original than in test; it just checks for its presence.
first 'a' from original: It finds 'a' in test.
Second 'a' from original: It finds (the same) 'a' in test again because the includes method doesn't remember or "consume" characters it has already checked.
First 'b' from original: It finds 'b' in test.
Second 'b' from original: It finds (the same) 'b' in test again for the same reason.
it does not accurately check for character frequencies, which can lead to false positives with other pairs of strings
*/
//to fix this
// change the string into an array then sort it 
// sorting it should arrange the letter in lexographical order
    //so if two words are the same then when we sort it they should be identical and have the same characters at the same postion
// then compare both strings

function isAnagram(test, original) {
    if (test.length !== original.length) return false;

    const normalize = str => str.toLowerCase().split('').sort().join('');

    return normalize(test) === normalize(original);
}
