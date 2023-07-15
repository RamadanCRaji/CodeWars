// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

/*
P
    a string of words
R  
    return the string with the first letter of each word capitalized
E:
     "How can mirrors be real if our eyes aren't real"==>   "How Can Mirrors Be Real If Our Eyes Aren't Real"
P:
    convert the string into an arry
    use arr.map to loop through the whole arr
        capture the fisrt character of the item usiing item.slice(0,1) then change to upperCase
        capture rest of the words then concate them together 
        return
    use arr.join(' ') then return the string back 
*/
function toJadenCase(str) {
  let arr = str
    .split(" ")
    .map((item) => {
      let x = item.slice(0, 1).toUpperCase();
      let y = item.slice(1);
      item = `${x}${y}`;
      return item;
    })
    .join(" ");
  return arr;
}

console.log(toJadenCase("How can mirrors be real if our eyes aren't real"));
//or
String.prototype.toJadenCase = function () {
  return this.split(" ")
    .map((item) => {
      let x = item.slice(0, 1).toUpperCase();
      let y = item.slice(1);
      item = `${x}${y}`;
      return item;
    })
    .join(" ");
};
