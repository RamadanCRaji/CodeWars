// Encrypt this!

// You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter must be converted to its ASCII code.
// The second letter must be switched with the last letter
// Keepin' it simple: There are no special characters in the input.

/*
input is a string if words sepereated by spaces 
return new string the first letter in each word  is replaced by its ASCII codes and the second
letter is swapped with the last letter 

Example
encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"

solving
change string into array then map through the array 
inside map method
call a helper fucntion to swith second and last letter 
then use str.replace and charCOde at 
*/


var encryptThis = function (text) {
  let newText = text.split(' ').map(e => {
    e = swapPositions(e)
    return e.replace(e[0], e.charCodeAt(e[0]))
  })
  return newText.join(' ')
}

function swapPositions(e) {
  e = e.split('');
  [e[1], e[e.length - 1]] = [e[e.length - 1], e[1]]
  return e.join('')
}
