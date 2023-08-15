// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

/*
P:
    sring parameter
R:
    return the string with the first and last character removed
E:
    removeChar('person'), 'erso'

P:
    use str.slice()

*/
function removeChar(str) {
    let endChar = str.length - 1;//gives me the index of the last character;
    return str.slice(1, endChar);
};

console.log(removeChar('person'))



