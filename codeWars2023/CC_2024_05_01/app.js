// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

// STRINGSFUNDAMENTALS

/*
P
   input is a string only  
R
    return {} containing # characters in key values
E
P
    change the string to an array
    create a varible of type 'object' {}
    loop through the input 
        check if empty object has the key-value pair?
            key-value pair? incremeant: create and then increament
            do this using a helper function
        return answer
 */
function count(string) {
   // TODO
   const charaCount = {};
   const doesExist = (item) => charaCount[item];
   string.split("").forEach((e) => {
      if (doesExist(e)) {
         charaCount[e] = charaCount[e] + 1;
      } else if (!doesExist(e)) {
         charaCount[e] = 1;
      }
   });
   return charaCount;
}

//Example
console.log(count("aba")); // => {a:2,b:1}
console.log(count("hahakkkkaaa")); //{h:2,a:5,k:4}
console.log(count(""));
