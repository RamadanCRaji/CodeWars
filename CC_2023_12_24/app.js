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
    * use a for..of loop to loop through the string
    * inside the for loop use a switch case to iterate through every character of the string
    * create a varibale called score and if score > 0 ? 'Right side wins!' : score < 0 ? 'Left side wins' : ' Lets fight again'
    * 
 */
// Example
console.log(alphabetWar("zdqmwpbs")) //=> let's fight again 
// left- w,p,b,s => 10
// right- z,d,q,m, => 10
console.log(alphabetWar("zzzzs")) //=> right side wins
// left- s => 1
// right- z,z,z,z => 4


// another method that is more efficients
function alphabetWar(fights) {
    let score = 0;
    for (const letter of fights)
        switch (letter) {
            case 'w': score -= 4; break;
            case 'p': score -= 3; break;
            case 'b': score -= 2; break;
            case 's': score -= 1; break;
            case 'm': score += 4; break;
            case 'q': score += 3; break;
            case 'd': score += 2; break;
            case 'z': score += 1; break;
        }
    return score > 0 ? 'Right side wins!' : score < 0 ? 'Left side wins' : ' Lets fight again'
}