// Define a function that takes an integer argument and returns a logical value true or false depending on if the integer is a prime.

// Per Wikipedia, a prime number ( or a prime ) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

// Requirements
// You can assume you will be given an integer input.
// You can not assume that the integer will be only positive. You may be given negative numbers as well ( or 0 ).
// NOTE on performance: There are no fancy optimizations required, but still the most trivial solutions might time out. Numbers go up to 2^31 ( or similar, depending on language ). Looping all the way up to n, or n/2, will be too slow.



/**
 input is any integer 
 return true if input is a prime or not 
 Example
    is_prime(1)  false
    is_prime(2)  true  
    is_prime(-1) false 
Pesudocode
 what is primen number? any number that can only divisible by 1 and itself    
 first check
    If a number ends in 0, 2, 4, 5, 6 or 8 then it's not prime (except for 2 and 5)
    if num%2,
    If the sum of the digits is a multiple of 3, then the number is not prime (except for 3)
    0,1,2,3,4,5,6,7,8,9
    first convert input to string
    convert string into array using Array.from(str)
    check if arr.length ===1 and if true 
      then check if n divided by 2,3,4,5,6,7,8,9 will give no reminder
        if true then n is not a prime number and return false 
    if arr.length>1 then check if str endsWith 2,4,5,6,7,8 
       if true  return false 
    if num< 100 check if its n%7 || n%11 || n%9 equal 0 
        if 
*/


function isPrime(num) {
    let strNum = num.toString();
    let arrNums = Array.from(strNum)
    
    if (num % 3 === 0 || num % 2 === 0 || num % 5 === 0) { return false }
    else if (arrNums.length > 1) {
        if (strNum.endsWith('2') || strNum.endsWith('4') || strNum.endsWith('5') || strNum.endsWith('6') || strNum.endsWith('8')) return false
    }
    else if (num < 100) {
        return num % 7 === 0 || num % 11 === 0 || num % 9 === 0
    }
    return true
}
console.log(isPrime(-1))