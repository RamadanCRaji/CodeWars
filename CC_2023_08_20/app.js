// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"
/*

P:
  one parameter which is a string
R:
  if str[0]== r then return 'name + playing banjo'
  else return name + " does not play banjo"
E:
  areYouPlayingBanjo("Ringo"), "Ringo plays banjo"
P: 
  set conditionals to check 
  use a teneray operator as conditional checker
  grab the first charater of the str 
  use a template literate to generate response 
  
  

*/
function areYouPlayingBanjo(name) {
    name= name[0]==='r'||name[0]==='R'? `${name} plays banjo`:`${name} does not play banjo`;
    return name;
}
