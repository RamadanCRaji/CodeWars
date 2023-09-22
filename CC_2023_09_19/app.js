/**
 * input is a string of lower case where each letter in the string has a point number that is equal to its position in the alphabet
 * return the higherest scoring word tht comes first
 * pseudoCode
    * create an array consisting of the alphabet where arr[char]+1 is the element's postion in the alphabet
    * split the string into an array 
    * loop the arr using a for of loop 
    * create a variable that holds the highest scoring word and the number of it 
    *  inside the for of loop use a for loop
    * on each iteration get loop though the string's character and grab its index number form arr and add
    * if result> longer then longer =result alse continue 
 */
function high(x) {
   let alphabet = [...'abcdefghijklmnopqrstuvwxyz'];
   console.log(alphabet)
   let arrOfWords = x.split(' ');
   let higherWord = '';
   let scoreHolder = 0;
   let counter = 0;
   for (item of arrOfWords) {
      for (let i = 0; i < item.length; i++) {
         counter = counter + (alphabet.indexOf(item[i]) + 1)
      }
      if (scoreHolder < counter) {
         scoreHolder = counter
         higherWord = item
      }
      counter = 0
   }
   return (higherWord)
}
console.log(high('what time are we climbing up the volcano'))
console.log(high('man i need a taxi up to ubud'))
