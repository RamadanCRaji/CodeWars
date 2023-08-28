// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.


// The input will be a lowercase string with no spaces.

// Good luck!

/*
input is a string of all lowercases
return the sub array of string with all character captialized at the 3rd index only and another of 2nd index
for example 
    capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.
Pseudo code
    change the string to an array
    use a map 
        grab the index and element
    set condtional
        if ind%2 !==0 the return e.toLowerCase()
        */
function capitalize(s) {
    let arrEvenCap = s.split('').map((e, i) => i % 2 === 0 ? e.toUpperCase() : e).join('');
    let arrOddCap = s.split('').map((e, i) => i % 2 !== 0 ? e.toUpperCase() : e).join('');
    return [arrEvenCap, arrOddCap]
};
console.log(capitalize('abcdef'))