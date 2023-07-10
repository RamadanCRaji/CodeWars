// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

/*
PREP
P: an array of names
R:returns a disply of people who liked the image
E: [] --> 'no one liked this'
  ['peter', jacob] --> jacob and Alex like this 
  if array.lenght>5 then output --> arr[0],arr[0] and the rest like this 
    ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
P:
create varibles to capture the first second and third names
if arr.lenght===0 return 'no one likes this'
i need to have two condtionals for under arr.lengh<4
  if arr.lenght>0 && arr.length<4
    then i return string using template litteral containg character names and the word "likes this"
  if charr.lenght>4
   return template literal 'char 1, chacter 2 and charter 4.lenght likes this hi
*/

// function likes(names) {
//   let person1 = names[0];
//   let person2 = names[1];
//   let person3 = names[2];
//   let persons = names.slice(2);
//   if (names.length === 0) {
//     return "no one likes this";
//   } else if (names.length === 1) {
//     return `${person1} likes this`;
//   } else if (names.length === 2) {
//     return `${person1} and ${person2} like this`;
//   } else if (names.length === 3) {
//     return `${person1}, ${person2} and ${person3} like this`;
//   } else {
//     return `${person1}, ${person2} and ${persons.length} others like this`;
//   }
// }

// refractor code using switch because i am stricly comparing values

// function likes(names) {
//   let person1 = names[0];
//   let person2 = names[1];
//   let person3 = names[2];
//   let persons = names.slice(2);
//   switch (names.length) {
//     case 0:
//       return "no one likes this";
//       break;
//     case 1:
//       return `${person1} likes this`;
//       break;
//     case 2:
//       return `${person1} and ${person2} like this`;
//       break;
//     case 3:
//       return `${person1}, ${person2} and ${person3} like this`;
//       break;
//     default:
//       return `${person1}, ${person2} and ${persons.length} others like this`;
//   }
// }

// or
function likes(names) {
  const length = names.length;

  switch (length) {
    case 0:
      return `no one likes this`;
      break;
    case 1:
      return `${names[0]} likes this`;
      break;
    case 2:
      return `${names[0]} and ${names[1]} like this`;
      break;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
      break;
    default:
      return `${names[0]}, ${names[1]} and ${length - 2} others like this`;
  }
}
