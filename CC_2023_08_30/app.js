// Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.

// All inputs will be valid.

/*
P:
    only one parameter and input is a digit 
R:
    return the number of digits in the string >=0
E:
    digits(5), 1,
P:
    turn input to string using n.toString()
    use str.length to obtain length of string  and return 

*/
function digits(n) {
    return n.toString().length
}
console.log(digits(123245))