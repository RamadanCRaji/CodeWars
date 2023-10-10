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
 what is prime number? any number that can only divisible by 1 and itself    
    if num has a divisor greate than it squareroot then it definitely has a divisor less than its squareroot 
    create a find the squareroot of num and loop
    create a for loop up until squareoot of n
    set counter num to the smallest prime number 
    inside the loop check if num % i ===0 and refurn false
    out of loop check if num > 1 because prime numbers are integers 
*/


function isPrime(num) {
    for (let i = 2; i < Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false
        }
    }
    return num > 1
}
console.log(isPrime(-1))
console.log(isPrime(2))