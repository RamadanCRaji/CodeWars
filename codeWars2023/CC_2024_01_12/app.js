// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

/**
 * Parameters
 * input will be a string of words
 * Return
 * return the the length of the shortest word in the string
 */

function findShort(s) {
   // split the string
   // loop through array with reduce method
   // set condition
   // if current item is greater in length than the accumulaot then accumlator stays else it gets replaced with the current string length
   // return the final value
   let shortestLength = s.split(" ").reduce((acc, nextItem) => {
      let accLength = acc.length;
      let nextItemLength = nextItem.length;
      if (nextItemLength < accLength) {
         return nextItem;
      } else {
         return acc;
      }
   });
   return shortestLength.length;
}
findShort("bitcoin take over the world maybe who knows perhaps"); // 7,4,4,3,5,5,3,5,7 =>3
// const array = [15, 16, 17, 18, 19];

// function reducer(accumulator, currentValue, index) {
//    const returns = accumulator + currentValue;
//    console.log(
//       `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`
//    );
//    return returns;
// }

// array.reduce(reducer);
