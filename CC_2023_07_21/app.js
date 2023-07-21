// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

/*
P: input a string containing various character
R:
    return the middle character
    word.length is odd return the middle charater
    if word.length is even return the 2 middle characters
E:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"

P:
     check to see if str.length is odd
        is so, use Math.ceil to round up a
        use  str[index-1]
    check to see if the str.length is even 
        if even grab the even number 
        use arr.splice(index-1, incrementerr+2) to grab it 
        return arr.join
*/
function getMiddle(str) {
  //Code goes here!
  let index;
  let incrementer;
  if (str.length % 2 !== 0) {
    index = Math.ceil(str.length / 2);
    return str[index - 1];
  } else {
    index = str.length / 2 - 1;
    incrementer = index + 2;
    return str.slice(index, incrementer);
  }
}
console.log(getMiddle("test"));
console.log(getMiddle("testing"));
