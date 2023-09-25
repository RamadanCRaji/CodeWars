// Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.

// All inputs will be valid.

/**
 * integer input that is valid 
 * return total number of digits present 
 * use n.toString().length
 */
function digits(n) {
    return n.toString().length
}
console.log(digits('12345'))