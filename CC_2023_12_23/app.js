// Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

// The left side letters and their power:

//  w - 4
//  p - 3
//  b - 2
//  s - 1
// The right side letters and their power:

//  m - 4
//  q - 3
//  d - 2
//  z - 1

/**
 * Paramter
    * Input is a string
    * each character in the string represents certain powers
    * 
 * return 
    * left side wins if left side has more points in the strings
    * right side wins if right side has more points in the string
* Pseudocode
    * split the array 
    * create an array variables constisting of the right and left characters with thier values
    * create another array that only has the string characters 
    * loop through the string and seperate left side character and right side characters
    * use reduces to obtain one singular value and compare results
    * 
 */
function alphabetWar(fights) {
    let leftSidePowers, rightSidePowers, righSideChars, leftSidechars, rightParticpants, leftParticpants;
    leftSidePowers = { w: 4, p: 3, b: 2, s: 1 };
    rightSidePowers = { m: 4, q: 3, d: 2, z: 1 };
    righSideChars = 'wpbs';
    leftSidechars = 'mqdz';
    rightParticpants = fights.split('')
        .filter(e => righSideChars.includes(e))
        .reduce((accum, nextItem) => accum + rightSidePowers['nextItem'], 0)
    leftParticpants = fights.split('')
        .filter(e => leftSidechars.includes(e))
        .reduce((accum, nextItem) => accum + rightSidePowers['nextItem'], 0)
    if (rightParticpants > leftParticpants) {
        return 'Right side wins!'
    }
    else if (rightParticpants < leftParticpants) {
        return 'Left side wins!'
    }
    else {
        return "Let's fight again!"
    }
}
// Example
console.log(alphabetWar("zdqmwpbs")) //=> let's fight again 
// left- w,p,b,s => 10
// right- z,d,q,m, => 10
console.log(alphabetWar("zzzzs")) //=> right side wins
    // left- s => 1
    // right- z,z,z,z => 4