
// A stream of data is received and needs to be reversed.

// Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:

// 11111111  00000000  00001111  10101010
//  (byte1)   (byte2)   (byte3)   (byte4)
// should become:

// 10101010  00001111  00000000  11111111
//  (byte4)   (byte3)   (byte2)   (byte1)
// The total number of bits will always be a multiple of 8.

// The data is given in an array as such:

// [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]
// Note: In the C and NASM languages you are given the third parameter which is the number of segment blocks.


/**
 * inpout is an of number bits
 * return the arr with the order of the segments reversed (each segment is 1 byte aka 8 digits )
 * Example
    * 11111111  00000000  00001111  10101010
    *  (byte1)   (byte2)   (byte3)   (byte4)
    * will be 
    * 10101010  00001111  00000000  11111111
    * (byte4)   (byte3)   (byte2)   (byte1)
* first split the array after every 7th index using arr.splice(0,7) and then push into another array 
*reverse the parent array segments
* return arr.flat
use a while loop
 */
function dataReverse(data) {
    let segmentArr = [];
    while (data.length) {
        segmentArr.push(data.splice(0, 8))
    }
    return segmentArr.reverse().flat()
}
console.log(dataReverse([1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0]))