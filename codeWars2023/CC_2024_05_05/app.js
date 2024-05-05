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

//Example
titleCase("a clash of KINGS", "a an the of"); //=> 'A Clash of Kings'
// titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows

/*
    return a string with title Case and any minor words that's gets lowercased except if the word is the first word of the string then it is titleCased
 
P:
    condition checker
        check if the first word of the string is present in the minor string
            - if yes
                - this will lead to camel that first word 
                - any other word matching that same letter will be lowercased
        check if any other word aside from first letter appears in minor
            - if yes,
                - those words get lower cased regardless
        check if that word is not the first word in the string or present at all
            - then it will get camel cased
    - split the string into an array
    - convert all elements into camelCase
    - use Array.shift to remove the first word of the string
    - map through the array the remaining elements and inside check if the minor words has contains current item
        - if yes convert to lowerCase and return
    - use arr.concat to combine all element


*/

function titleCase(title, minorWords) {
   let titleCasedWords = title.split(" ").map((e) => {
      let value = e.slice(0, 1).toUpperCase() + e.slice(1).toLowerCase();
      return value;
   });
   let firstWord = [...titleCasedWords.shift()].join("");

   let restOfWords = titleCasedWords.map((e) =>
      minorWords.includes(e.toLowerCase()) ? e.toLowerCase() : e
   );
   const finalAns = firstWord.concat(restOfWords);
   return finalAns;
}
