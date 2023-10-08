// DESCRIPTION:
// Task
// Given a string representing a simple fraction x/y, your function must return a string representing the corresponding mixed fraction in the following format:

// [sign]a b/c

// where a is integer part and b/c is irreducible proper fraction. There must be exactly one space between a and b/c. Provide [sign] only if negative (and non zero) and only at the beginning of the number (both integer part and fractional part must be provided absolute).

// If the x/y equals the integer part, return integer part only. If integer part is zero, return the irreducible proper fraction only. In both of these cases, the resulting string must not contain any spaces.

// Division by zero should raise an error (preferably, the standard zero division error of your language).

// Value ranges
// -10 000 000 < x < 10 000 000
// -10 000 000 < y < 10 000 000
// Examples
// Input: 42/9, expected result: 4 2/3.
// Input: 6/3, expedted result: 2.
// Input: 4/6, expected result: 2/3.
// Input: 0/18891, expected result: 0.
// Input: -10/7, expected result: -1 3/7.
// Inputs 0/0 or 3/0 must raise a zero division error.
// Note
// Make sure not to modify the input of your function in-place, it is a bad practice.

/**
 * input is a string representing a simple fraction 
 * return a string that corresponds to the mixed fraction 
    * [sign]a b/c
    * return interger is x%y = 0
    * if a ===0 return a/b 
    * note that both integer part and fraction must be absolute value
* psudocode
    * split in the string into two an arr
    * i need to divide arr[0] by arr[1]
    * check conditions 
        * if arr[0]%arr[1] === 0 then return the result of the division
        * if arr[0] ===0   return 0
        * if arr[1] ===0  return errror
        * Otherwise proceed bellow 
        * if a<b then we are reeturning a proper function
            * find the HCF 
                * we do this my looping up i<denomminator
                * check to see which number makes arr[0]%i===0 && arr[1]%i===0 and push them to array
                * if arr.length ===0 return {arr[0]/arr[i]}
                * else return ${arr[0]/HCF}/${arr[0]/HCF}
        * if a>b then create a seperate logic 
            * perfrom a/b and get the
            * use that value multiply by b and subtract from a---
            * find the HCF of the new value and b 
            * if any is present then return `a ${newArr[0]/HCF}/${newArr[0]/HCF} `
            * if not then return [sign]a b/c

            * find out when a%b is, 
            * use that result and multiply by b and substract from a and this will give the remainder
            * use the remainder 6/9 and in this case a<b so 
                * then find the HCF by doing b%
                * create a loop to find HCF i<b and eeach time check if 6%i ===0 and 9%i ===0 aush them into an array 
                * if array is empty then concat a b/c 
                * if array is not empty then 
                * kaaron resa- 7154650075
                * allan madison 9202132428
            *   
 */

function mixedFraction(s) {
    let top, bottom;
    let hcf = [];
    let fractionArr = s.split('/')
    if (fractionArr[0] % fractionArr[1] === 0) { return (fractionArr[0] / fractionArr[1]).toString() }
    else if (fractionArr[0] === 0) { return ('0') }
    else if (fractionArr[1] === 0) { return (NaN) }
    else if (fractionArr[0] < fractionArr[1]) {

        //check if numbers can be futher reduced first 
        if (fractionArr[1] % fractionArr[0] === 0) {
            top = fractionArr[0] / fractionArr[0];
            bottom = fractionArr[1] / fractionArr[0]
            return (`${top}/${bottom}`)
        }
    }
    else if (fractionArr[0] > fractionArr[1]) {
        let integer = (fractionArr[0] / fractionArr[1]).toString().split('.')[0];
        let topNumFrac = (fractionArr[0] / fractionArr[1]).toString().split('.')[1];

        // find HCF
        // fractionArr[0]- integer*fractionArr[1]
        if (integer > 0) {
            for (let i = 1; i < fractionArr[1]; i++) {
                if (topNumFrac % i === 0 && fractionArr[1] % i === 0) {
                    hcf.push(i)
                }
            }
            let max = Math.max(...hcf)
            return (`${integer} ${topNumFrac / max}/${fractionArr[1] / max}`)
        }
        if (integer < 0) {
            for (let i = 1; i < fractionArr[1]; i--) {
                if (topNumFrac % i === 0 && fractionArr[1] % i === 0) {
                    hcf.push(i)
                }
            }
            let min = Math.max(...hcf)
            return (`${integer} ${topNumFrac / max}/${fractionArr[1] / max}`)
        }

    }
}
function mixedFraction(s) {
    let [num, den] = s.split('/').map(Number)
    if (den === 0) throw 'ZeroDivisionError'
    if (num === 0) return '0'
    if (num % den === 0) return (num / den).toString()
    let integerPart = Math.floor(num / den)
    num -= (integerPart * den)

    let g = gcd(Math.abs(num), Math.abs(den));

    num = num / g
    den = den / g
    if (num === 0) {
        return integerPart.toString();
    }
    if (integerPart !== 0) {
        return `${integerPart} ${num}/${den}`;
    }
    return `${num}/${den}`;
}

function gcd(a, b) {
    let hcf = []
    for (let i = 1; i < b; i++) {
        if (a % i === 0 && b % i === 0) {
            hcf.push(i)
        }
    }
    return Math.max(...hcf)
}


