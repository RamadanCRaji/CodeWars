// Description
// We need a function that can transform a string into a number. What ways of achieving this do you know?

// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.
/*
 PREP:
 P:input will be strings
 R:return a number data type of the string 
 E:
stringToNumber("1234"),1234)
stringToNumber("605"), 605)
stringToNumber("1405"),1405)
stringToNumber("-7"),  -7)
P:
 use the Number function to achieve this 
    Number()
*/

const stringToNumber = function (str) {
  return Number(str);
};
