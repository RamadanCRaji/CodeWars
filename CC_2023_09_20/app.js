/**
 * input is a string of lower case where each letter in the string has a point number that is equal to its position in the alphabet
 * return the higherest scoring word tht comes first
 * pseudoCode
   * create an array holding letters of the alphabets
    * create an anonymous function to calculate the word of score 
      * use arr.reduce
         * inside function use arr.indexOf(e) to get the index of element and add 1 to it 
   * change parameter into an array and use reduce method
      * get the word score of the current item 
      * create a variable tht holds that score 
      * if the current word is greater than the accumulator return current else return accumulator 
 */
function high(x) {
   let alphabet = [...'abcdefghijklmnopqrstuv'];
   let score = item => [...item].reduce((acc, current) => acc + alphabet.indexOf(current) + 1, 0);

   return x.split(' ').reduce((highWord, word) => {
      let wordScore = score(word);
      return wordScore > score(highWord) ? word : highWord
   }, '')
}

console.log(high('sample text here'))// sample 