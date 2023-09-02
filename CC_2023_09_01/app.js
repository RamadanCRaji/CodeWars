// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"


/**
 * P
    * input is a string
 * R
    * return the string but in camel casing
    * conditions
        * Capitalize the first word in output only if orginal Word was capitalized
 * E
    * the-stealth-warrior" gets converted to "theStealthWarrior"
    * "The_Stealth_Warrior" gets converted to "TheStealthWarrior"
 * P
    * convert string to array using Arr.from()
    
    * use a forEach Loop
    *  conditions
      * if (e === '_' || e === '-')
         * get index of '_' and name if underIndex
         * get the index of '-' and name it dashIndex
         * use Arr.splice
            * grab the element from 0 up until the the index of that '-' or '_' using arr.splice
            * grabt the element just after '-' or '_' and capitalize it and concate it 
               * str.chartAt(index+1)
            * now with arr.splice() and say 
               * from 0 up until index of '-' or '_' cut it 
               * 
*/

function toCamelCase(str) {
   let newStr = [];

   for (let i = 0; i < str.length; i++) {
      if (str[i] === '-' || str[i] === '_') {
         // Skip the dash or underscore and capitalize the next character.
         i++;
         newStr.push(str[i].toUpperCase());
      } else {
         newStr.push(str[i]);
      }
   }

   return newStr.join('');
}

//or 
function toCamelCase(str) {
   let newStr = '';
   for (let i in str) {
      if (str[i - 1] === '_' || str[i - 1] === '-') {
         newStr = newStr + str[i].toUpperCase();
      }
      else if (str[i] === '_' || str[i] === '-') {
         continue
      }
      else { newStr = newStr + str[i] }
   }
   return newStr
}
// or 
function toCamelCase(str) {
   let newStr = [];

   Array.from(str).forEach((e, i) => {
      if (i === 0) {
         newStr.push(e);
      } else if (e === '_' || e === '-') {
         // If we find an underscore or dash, we don't do anything in this iteration.
         // The next character will be capitalized in the next iteration.
      } else if (str[i - 1] === '_' || str[i - 1] === '-') {
         newStr.push(e.toUpperCase());
      } else {
         newStr.push(e);
      }
   });

   return newStr.join('');
}

console.log(toCamelCase("The_Stealth_Warrior"))