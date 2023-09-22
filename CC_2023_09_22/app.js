
DESCRIPTION:
// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.


// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

//PREP
/**
 * Input is a string of alphabets & each character is has a point number according to its alpahbetical number
 * return the word with the highest count
 *  Example, 
   * the score of abad is 8 (1 + 2 + 1 + 4).
* PsedoCode
   * i will need to create an array  containing the alphabets for point reference 
   * conver str into array using arr.split(' ')
      * loop through each element in the array and calculate score for each word using arr.reduce
         * if current is > accumulator then accumlator becomes current
         * create a helper function to calculate word score 
 */
function high(x) {
   let strArr = [...'abcdefghijklmnopqrstuvwxyz'];
   let ScoreCalculator = (word) => {
      return [...word].reduce((acc, curItem) => acc + strArr.indexOf(curItem) + 1, 0)
   }
   return x.split(' ').reduce((highWord, word) => {
      let wordScore = ScoreCalculator(word);
      return wordScore > ScoreCalculator(highWord) ? word : highWord
   }, '')
}
console.log(high('sample text here'))// sample 
