// eturn the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.
/*
PREP
P: input is of type string
R: return a string that consist only of lower cases letters and or spaces
E: getCount("abracadabra")= 'aaaaa' or getCount(" ")=0
P:
  need to check if arr.length is =0; if so then return 0 
  converts the sring into an array 
  use the arr.filter(char)
  inside the function body use regex enfuring to return all lowercases not uppercases
  if item matches any of the expression then reaturn it
  and then return it back to the
*/

function getCount(str) {
  let arr = Array.from(str);
  let newArr;
  console.log(str);
  if (arr.length === 0) {
    return 0;
  } else if (arr.length !== 0) {
    newArr = arr.filter((item) => {
      if (/[aeiou]/g.test(item)) {
        return item;
      }
    });
  }
  return newArr.length;
}
