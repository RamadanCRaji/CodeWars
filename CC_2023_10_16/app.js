// Given a variable n,

// If n is an integer, Return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark. If n is negative, then the negative sign should be removed.

// If n is not an integer, return the string "NaN".

// Ex:

// dashatize(6815) -> '68-1-5'


/**
 * input is an integer that could be >0<
 * if n Return a sting that contains a bash before an after every odd number
    * there should not be a dash before first letter and after first letter
 * Example 
    * dashatize(274) -> '2-7-4'
 * PseudoCode
    * checks
        * N !== Number
    * N -> string -> replace '-ve' with ''
    * checks
        * create var to hold ans
        * change input ->array.split('') then map through it
        * conditionals 
            * if index of the first == 0 
                * if odd then concate index with '-' after index 
                * else just concate to ans
            * if index !==0 &&  if e is an odd number?
                * check if string ends with '-' and if true then  concate with 'e-' else '-e-'
            *  * if index !==0 &&  if e is an even number?
                * const 'e'
        * check if final ans ends with '-' if true remove it 
                     
    * convert string to array and loop through using a for each loop 
    * on each iteration check if char in string is odd and also check if check if the last char in string is a dash'
    * if it is then only concat current char with a dash infront of it
    * if it is not then concate current char with a dash before and it 
 */

function dashatize(num) {
    let str = ''
    if (typeof num !== "number" || isNaN(num)) { return "NaN" }
    else {
        let arrayOfChar = Array.from(Math.abs(num).toString())
        arrayOfChar.forEach((e, i) => {
            //checks the first character
            if (i === 0) {
                parseInt(e) % 2 !== 0 ? str = str + `${e}-` : str = str + e
            }
            //check if e is odd 
            else if (i !== 0 && parseInt(e) % 2 !== 0) {
                str.endsWith('-') ? str = str + `${e}-` : str = str + `-${e}-`
            }
            else if (i !== 0 && parseInt(e) % 2 === 0) {
                str = str + e
            }
        })
        return str.endsWith('-') ? str.slice(0, -1) : str
    }
}
console.log(dashatize(NaN))