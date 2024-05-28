// Write a program to determine if a string contains only unique characters. Return true if it does and false otherwise.

// The string may contain any of the 128 ASCII characters. Characters are case-sensitive, e.g. 'a' and 'A' are considered different characters.

/**
 P
   input is string
   there cannot be dupilcate of the same character
Return
   T/F is str.includes (ASCI characters)
E
   hasUniqueChars("  nAa")=> false 'cus spaces are not considereed ASCII
P
   check for duplicates
      str.split(' ')
      indexOf===lastIndexOf
      if fasle retudn false
   if no duplicats present
      create a variable that contains all ASCII characters
   use the every method in the array to see if every element in array is included in ASCII string
   return ans
 */

function hasUniqueChars(str) {
   let duplicates = str.split("").filter((e, i, a) => i !== a.lastIndexOf(e));
   if (duplicates.length > 0) {
      return false;
   } else {
      return true;
   }
}
