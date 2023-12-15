// Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.

// Examples
// "312" should return "333122"
// "102269" should return "12222666666999999999"

/**
 * Paremeters
    *  input will be a string 
 * Return 
    * return the digits in the strings repeated a number of times equal to thier values
 * PesudoCode
    * split the string using str.split('')
    * loop through the array with arr.map
    * on each loop use str.repeat on each  item in the array 
    * return results
    * use join and return final answer
 * 
 
 */
function explode(str) {
    let arrOfStr = Array.from(str).map(e => {
        return e.repeat(+e)
    })
    return arrOfStr.join('')
}

//Examples 
console.log(explode("312")) // => 333122
console.log(explode("102269")) // => 12222666666999999999
console.log(explode("")) // => ''