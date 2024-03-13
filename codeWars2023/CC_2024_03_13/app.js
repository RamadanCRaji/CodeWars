// Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

// "hello world".toAlternatingCase() === "HELLO WORLD"
// "HELLO WORLD".toAlternatingCase() === "hello world"
// "hello WORLD".toAlternatingCase() === "HELLO world"
// "HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
// "12345".toAlternatingCase()       === "12345"                   // Non-alphabetical characters are unaffected
// "1a2b3c4d5e".toAlternatingCase()  === "1A2B3C4D5E"
// "String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"

/*
P:
  input will always be string
  
R:
  function that returns alternate cases of string placed

p
  loop through using a string replace method
  create a variabel named str and set it equal to 'this'
  use regex to determine the pattern of interest
  inside replace method call CBF 
  in CBF chec to see if match is upperCase or lowerCase, 
  if match === upperCase then return vice versa if match is === lowerCase then return opposite
  use the str.toUpperCase() and str.toLowerCase() method
  
*/
String.prototype.toAlternatingCase = function () {
   let change = (match) => {
      return match === match.toLowerCase()
         ? match.toUpperCase()
         : match.toLowerCase();
   };
   let string = this;
   string = this.replace(/[A-Z]/gi, change);
   return string;
};
console.log("HeLLo WoRLD".toAlternatingCase()); //=> 'hEllO wOrld'
