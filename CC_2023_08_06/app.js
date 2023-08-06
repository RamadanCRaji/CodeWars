// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

/*
P:
    input is an integer>0
R:
    return total # of bits equal to 1
E
    countBits(4), 1
P:
    use toString() method to convert n into binary 
    use conver to filter and set condition to check if elemnet === 1
    return array.length 

*/
function countBits(n) {
    let arr = Array.from(n.toString(2)).filter(e => e === '1');
    return arr.length;
}
console.log(countBits(1234))


// DRY version 
function countBits(n) {
    return n.toString(2).split('1').length - 1;// since the number of segemts in an array is always 1 more than the number of delimeter
}