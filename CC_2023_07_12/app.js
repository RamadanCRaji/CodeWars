// DESCRIPTION:
// A simple substitution cipher replaces one character from an alphabet with a character from an alternate alphabet, where each character's position in an alphabet is mapped to the alternate alphabet for encoding or decoding.

// E.g

/*
P: input of two seperate string  characters one for encode and the other for decode 
    abc1 is for econde-- it will look for the character in at that index positon 
    abc2 is for decode --- it will look for the character in that index  positon at abc1 and return it 
R:
    depending on the method called it will return either encoded or decoded 
E: 
var abc1 = "abcdefghijklmnopqrstuvwxyz";
var abc2 = "etaoinshrdlucmfwypvbgkjqxz";
   
var sub = new SubstitutionCipher(abc1, abc2);
sub.encode("abc") // => "eta"
sub.encode("xyz") // => "qxz"
sub.encode("aeiou") // => "eirfg"
   
sub.decode("eta") // => "abc"
sub.decode("qxz") // => "xyz"
sub.decode("eirfg") // => "aeiou"

P:
    contructor function is needed for new instance
    store the parameters as properties values 
    have a method called this.endcode that will encode and another method called this.decode to decode
    this.encode
        declare a local variable that will hold the characters that are pushed into it
        pass str as an argumnet and compare against abc1
            use a for of loop to loop through str and inside the for of loop use indexOf(x)
                once I get the index of the that i can  use this.abc2[index] to find the element and then push it into an empty array
                if abc1.indexOf(x) if true then value.push(this.abc`[index]) else value.push(x)
            at the end return the arr.join
            do the same for decode except compare against abc2

*/
function SubstitutionCipher(abc1, abc2) {
  this.abc1 = abc1;
  this.abc2 = abc2;
  this.encode = function (str) {
    let value = [];
    for (const x of str) {
      let index = this.abc1.indexOf(x);
      if (index !== -1) {
        value.push(this.abc2[index]);
      } else {
        value.push(x); // character not found, copy it as is
      }
    }
    return value.join("");
  };
  this.decode = function (str) {
    let value = [];
    for (const x of str) {
      let index = this.abc2.indexOf(x);
      if (index !== -1) {
        value.push(this.abc1[index]);
      } else {
        value.push(x); // character not found, copy it as is
      }
    }
    return value.join("");
  };
}

//using a map instead
function SubstitutionCipher(abc1, abc2) {
  this.abc1 = abc1;
  this.abc2 = abc2;
  this.encode = function (str) {
    return Array.from(str)
      .map((x) => {
        let index = this.abc1.indexOf(x);
        return index !== -1 ? this.abc2[index] : x;
      })
      .join("");
  };
  this.decode = function (str) {
    return Array.from(str)
      .map((x) => {
        let index = this.abc2.indexOf(x);
        return index !== -1 ? this.abc1[index] : x;
      })
      .join("");
  };
}
