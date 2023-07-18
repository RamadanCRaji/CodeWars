// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example

/*
P:
    string input
R:
    the count of distinct case-Insensitive alphabetic characters and  the numric digits that occure more than once in the input string
        so not case sensetive but how many letter more than one and how many numbers repeat more than once 
E:
    "abcde" -> 0 # no characters repeats more than once
    "aabbcde" -> 2 # 'a' and 'b'
    "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
    "indivisibility" -> 1 # 'i' occurs six times
    "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
    "aA11" -> 2 # 'a' and '1'
    "ABBA" -> 2 # 'A' and 'B' each occur twice
P:
    change the string it an array using a spread operator
    create an array that will hold  objects
    then use arr.push to add new object inside the array 
    the object will object.charter for everty character in the new arry
    loop through the array with a for loop
        for each element check  obj.element exist
        if it does not then create and set the count to 1
        if  it does then then increment by one 
    at this point i will have an object that holds all charater and their count number 
    {'e:1, 'c':2}
    i need to get those numbers
    use a for of loop
    for(const x of string){ this is to grab the chacter of the string 
        arr.ForEach(item=> if(item[x]){arr.push(item[x])}
    }
    arr.filter(item=>item>1)
*/
function duplicateCount(string) {
  let obj = {};
  let count = 0;
  string = string.toLowerCase();
  string = [...string];
  for (const char of string) {
    //loop though the string and grab each character
    if (obj[char]) {
      // checks to see if the property is present in the object
      obj[char] += 1;
    } else {
      obj[char] = 1;
    }
  }
  console.log(obj);
  let countNumbers = [...Object.values(obj)]; // grabs the values of each parameters present in the the object
  countNumbers.forEach((item) => {
    // checks if the items are greater than one if increament based on that
    if (item > 1) {
      count++;
    }
  });
  return count;
}
console.log(duplicateCount("aA11"));
