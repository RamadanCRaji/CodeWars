// You will be given an array of objects (associative arrays in PHP, tables in COBOL) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return an array where each object will have a new property 'greeting' with the following string value:

// Hi < firstName here >, what do you like the most about < language here >?

// For example, given the following input array:

// var list1 = [
//   { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
//   { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
//   { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' }
// ];
// your function should return the following array:

// [
//   { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java',
//     greeting: 'Hi Sofia, what do you like the most about Java?'
//   },
//   { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python',
//     greeting: 'Hi Lukas, what do you like the most about Python?'
//   },
//   { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby',
//     greeting: 'Hi Madison, what do you like the most about Ruby?'
//   }
// ];
// Notes:

// The order of the properties in the objects does not matter (except in COBOL).
// The input array will always be valid and formatted as in the example above.

/*
P
   input is an arr of objects
R
   return new arr of obj, each has new 'greeting' property
E
   loop through arr with map 
   on each item use the object notiation to add a property name called greeting
   use the this keyword to point directly to the object itself
   use template literal concat the ans

*/
var list1 = [
   {
      firstName: "Sofia",
      lastName: "I.",
      country: "Argentina",
      continent: "Americas",
      age: 35,
      language: "Java",
   },
   {
      firstName: "Lukas",
      lastName: "X.",
      country: "Croatia",
      continent: "Europe",
      age: 35,
      language: "Python",
   },
   {
      firstName: "Madison",
      lastName: "U.",
      country: "United States",
      continent: "Americas",
      age: 32,
      language: "Ruby",
   },
];
function greetDevelopers(list) {
   let ans = list.map((obj) => {
      let newObj = { ...obj };
      newObj.greeting = `Hi ${obj.firstName}, what do you like the most about ${obj.language}?`;
      return newObj;
   });
   console.log(ans);
}
greetDevelopers(list1);
//example

// console.log(greetDevelopers(list1)); //=> // [
//   { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java',
//     greeting: 'Hi Sofia, what do you like the most about Java?'
//   },
//   { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python',
//     greeting: 'Hi Lukas, what do you like the most about Python?'
//   },
//   { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby',
//     greeting: 'Hi Madison, what do you like the most about Ruby?'
//   }
// ];
