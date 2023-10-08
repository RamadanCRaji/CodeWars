/*   

DESCRIPTION:
Task
Given a string representing a simple fraction x/y, your function must return a string representing the corresponding mixed fraction in the following format:

[sign]a b/c

where a is integer part and b/c is irreducible proper fraction. There must be exactly one space between a and b/c. Provide [sign] only if negative (and non zero) and only at the beginning of the number (both integer part and fractional part must be provided absolute).

If the x/y equals the integer part, return integer part only. If integer part is zero, return the irreducible proper fraction only. In both of these cases, the resulting string must not contain any spaces.

Division by zero should raise an error (preferably, the standard zero division error of your language).

Value ranges
-10 000 000 < x < 10 000 000
-10 000 000 < y < 10 000 000
Examples
Input: 42/9, expected result: 4 2/3.
Input: 6/3, expedted result: 2.
Input: 4/6, expected result: 2/3.
Input: 0/18891, expected result: 0.
Input: -10/7, expected result: -1 3/7.
Inputs 0/0 or 3/0 must raise a zero division error.
Note
Make sure not to modify the input of your function in-place, it is a bad practice.

*/


/**
 * string input of simple fraction 
 * return a mixed fractio in the fortmat 
    * [sign a] b/c
    * if x/y results in whole number return whole number 
    * if x/y results in interger being zero then return b/c 
    * if b ==0 throw error 
    * keep the sign of the input 
* psudocode
    *change the input into an array usig arr.split, map to convert all characters to Numbers
    *decstructure input into num & den
    * check to see if num < 0 and if it is then assign a variable called 'sign' negative
    * check if den ===0 throw 'ZeroDivisionError'
    * get integer part by num/den and using Math.floor to rounder 
    * change the num and den to absolute values
    * get the Newnumerator value by den*integepart -oldnumerator
    * find the gcf between num and den using a helper function
    * check if Math.floor (x/y) !==0 return x/y
    * if integerPart= 0 & num !==0 return x/y
    * if integer part !=0 and num  !==0 reutrn [sign]intger part num/den
*/

function mixedFraction(s) {
    let [num, den] = s.split('/').map(e => Number(e))
    if (den === 0) throw 'ZeroDivisionError';
    let val = num / den;

    let sign = ''
    if ((num < 0 && den > 0) || (num > 0 && den < 0)) { sign = '-' }
    if (num % den === 0) { return `${val}` } // takes care of x/y is integer

    den = Math.abs(den)
    num = Math.abs(num)

    let integepart = Math.floor(num / den);
    num = num - (integepart * den)


    let g = gcd(num, den)
    num = num / g;
    den = den / g;

    if (integepart === 0 && num !== 0) {
        return `${sign}${num}/${den}`
    }
    else if (integepart !== 0 && num !== 0) {
        return `${sign}${integepart} ${num}/${den}`
    }
}
function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b)
}

