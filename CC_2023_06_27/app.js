/*
PREP
P: a string of character
  containing all digits
  containg digits and letters
  containg letters
R:
  return true if string is str.length=4 or 6
  does not contain any letters and only digits--return fals if it does
E:
  "1234"   -->  true
  "12345"  -->  false
  "a234"   -->  false 
P:
 condition
  if str.length!==4 && str!==6 return false 
  else if (str.length===4 || str===6){
  i need check it it includes any letters
    do so using regex 
    if str.match(/\D/){return false else return true}
  }

*/

function validatePIN(pin) {
  if (pin.length !== 4 && pin.length !== 6) {
    return false;
  } else if (pin.length === 4 || pin.length === 6) {
    if (pin.match(/\D/)) {
      return false;
    } else {
      return true;
    }
  }
}
