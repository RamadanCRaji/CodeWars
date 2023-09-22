// A stream of data is received and needs to be reversed.

// Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:


// The data is given in an array as such:

// [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]

/**
 * input is a 2d array with each segments being 8bits long 
 * return the order of these segments back in reversed order
 *  11111111  00000000  00001111  10101010
 (byte1)   (byte2)   (byte3)   (byte4)
should become:

10101010  00001111  00000000  11111111
 (byte4)   (byte3)   (byte2)   (byte1)
The total number of bits will always be a multiple of 8.

 * pseudo coding
    * i need to split the array after every 7th index
        * use a for loop 
        * if  i%8 ===0 then arr.splice[0,i]
    * each segments is in base in a different base so convert to decimal use parseInt()
    * loop through the array using a map 
        * change the item to decimal and return a sub array 
    * use array.sort and sort new items in descending order
    * 0 1 2 3 4 5
    * 1 2 4 8 18 32
    * 
 */
// function dataReverse(data) {
//     console.log(data)
//     let newAar = [];
//     while (data.length) {
//         newAar.push(data.splice(0, 8))
//     }
//     let arr = newAar.map(e => {
//         let decimalNum = parseInt(e.join(''), 2);
//         return [e, decimalNum]
//     }).sort((a, b) => b[1] - a[1])
//         .map(e => e[0])
//     return arr.flat()
// }
console.log(dataReverse([
    1, 1, 1, 1, 1, 1, 1, 1, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 1, 1, 1, 1, 1, 0, 1,
    0, 1, 0, 1, 0
]))

function dataReverse(data) {
    console.log(data)
    let newAar = [];
    while (data.length) {
        newAar.push(data.splice(0, 8))
    }

    return newAar.reverse().flat();
}