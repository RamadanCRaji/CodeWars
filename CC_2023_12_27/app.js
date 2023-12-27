// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'

/**
 * parameter
    * take in a str input
 * return 
    * new string with all letter c swapped with letter b and vice versa
 * 
 * 
 * 
 */
//example

function switcheroo(str) {
    /**
     * split string into an array
     * use arr.map to transform elligible character
     * create a helper function to make the switch 
     * if a or b use the helper function else return element
     * convert the array into string with arr.join
     * then return 
     */
    let strArr = str.split('').map(e => {
        if (e === 'a' || e === 'b') {
            return makeSwitch(e)
        }
        else { return e }
    })
    return strArr.join('')
}
function makeSwitch(e) {
    return e === 'a' ? 'b' : 'a'
}

function switcheroo(str) {
    let strArr = str.split('').map(e => e === 'b' ? 'a' : e == 'a' ? 'b' : e)
    return strArr.join('')
}
console.log(switcheroo('abdfcs')) // -> acdfbs
console.log(switcheroo('aaabcccbaaa')) // bbbacccabbb