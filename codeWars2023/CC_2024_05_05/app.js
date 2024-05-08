// A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

// Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.

// Arguments (Haskell)
// First argument: space-delimited list of minor words that must always be lowercase except for the first word in the string.
// Second argument: the original string to be converted.
// Arguments (Other languages)
// First argument (required): the original string to be converted.
// Second argument (optional): space-delimited list of minor words that must always be lowercase except for the first word in the string. The JavaScript/CoffeeScript tests will pass undefined when this argument is unused.
// Example
// titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
// titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
// titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'

/*
    return a string with title Case and any minor words that's gets lowercased except if the word is the first word of the string then it is titleCased
 
P: 
    two arguments both strings- p1:title, p2:minorWords
R:
    return p1 where all words in str are 'Title Cased'

P:
    condition checker
        two outcomes 
        if (minorWords)
            split strings to appray and check if some of the elements are present in titleWord
            remove first character in array and then check if minorWords includes it
                if it does then camelCAse using splice
            now camelCase the rest and then check if minorWors includes it, 
                if it does then loop through arr and lowerCase items that are true
                return 
            create a helper function
        {

        }
        else{
            convert all strings in title to Title Case
        }

*/
//Example
titleCase("a clash of KINGS", "a an the of"); //=> 'A Clash of Kings'
// titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows

// function titleCase(title, minorWords) {
//    const makeCamelCase = (e) =>
//       e
//          .toString()
//          .split(" ")
//          .map((e) => e[0].toUpperCase() + e.slice(1).toLowerCase());
//    const isMinorWords = (e) =>
//       title.split(" ").some((e) => minorWords.includes(e));
//    const makeLoweCase = (e) => e.toLowerCase();

//    if (minorWords) {
//       if (isMinorWords(title)) {
//          let titleCased = [...title.split(" ")].map((e) =>
//             minorWords.includes(e) ? makeCamelCase(e) : makeCamelCase(e)
//          );
//          let firstWord = titleCased.splice(0, 1).map((e) => makeCamelCase(e));
//          return firstWord.concat(titleCased);
//       }
//    } else {
//       return makeCamelCase(title);
//    }

// }

function titleCase(title, minorWords = "") {
   const minorWordsArray = minorWords.toLowerCase().split(" ");
   const titleCased = title
      .toLowerCase()
      .split(" ")
      .map((word, index) => {
         if (index !== 0 && minorWordsArray.includes(word)) {
            return word;
         }
         return word.charAt(0).toUpperCase() + word.slice(1);
      });
   return titleCased.join(" ");
}
