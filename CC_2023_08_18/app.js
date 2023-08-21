// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.



/*
P:
input is a string with two words
R:
  return the abbreviations of the name
E:
  Sam Harris => S.H
P
  change all characters to uppercase using toUpperCase() method 
  split string into an array 
  grab the first charter of each element 
  concat it using ``
  return string 
'
*/
function abbrevName(name){
    console.log(name)
  let arr=name.toUpperCase().split(' ');
  return `${arr[0][0]}.${arr[1][0]}`
  }