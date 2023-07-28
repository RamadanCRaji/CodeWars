// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

/*
P
    input is a string
    ignore every non letter it
R
    replace every letter in with its position in the alphabat.
E:
    alphabetPosition("The sunset sets at twelve o' clock.")==> "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
P:
    transform every letter in the string 
    create a spread of array  with letters A-Z called 'alphabetChar'
    change the str into an array using Array.from()
    use arr.filter(()=>arr.includes) to return all elements that are in the A-Z array
    use the map method to transform every element 
        inside the map method use arr.indexOf(char)+1
    return array. join(')
*/
function alphabetPosition(text) {
  let finalArr = [];
  let alphabetChar = [..."abcdefghijklmnopqrstuvwxyz"];

  let textArr = Array.from(text.toLowerCase()).filter((item) =>
    alphabetChar.includes(item)
  );
  return textArr
    .map((i) => {
      return alphabetChar.indexOf(i) + 1;
    })
    .join(" ");
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
// alphabetPosition("The sunset sets at twelve o' clock.");
