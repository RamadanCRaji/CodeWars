// Introduction
// The wave (known as the Mexican wave in the English-speaking world outside North America) is an example of metachronal rhythm achieved in a packed stadium when successive groups of spectators briefly stand, yell, and raise their arms. Immediately upon stretching to full height, the spectator returns to the usual seated position.

// The result is a wave of standing spectators that travels through the crowd, even though individual spectators never move away from their seats. In many large arenas the crowd is seated in a contiguous circuit all the way around the sport field, and so the wave is able to travel continuously around the arena; in discontiguous seating arrangements, the wave can instead reflect back and forth through the crowd. When the gap in seating is narrow, the wave can sometimes pass through it. Usually only one wave crest will be present at any given time in an arena, although simultaneous, counter-rotating waves have been produced. (Source Wikipedia)
// Task
// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 
// Rules
//  1.  The input string will always be lower case but maybe empty.

//  2.  If the character in the string is whitespace then pass over it as if it was an empty seat

/**
  *input will be a string containing only alphabets
  *return the string string.length number of times
    * where an upercase in the letter in the string represent the a person standing up
    * if the character in the string is white space then skip it  is a white space then
  *solution
    * change the string into an array 
    * create an array that will hold the answers 
    * i need the index of the items so use a forEach loop to create a side effect 
    * use the index find to find it in the array and upperCase it then join it and push it to the anwer array holder 
    * trurn the the answer array
  * 
*/


function wave(str) {
    let waves = []
    Array.from(str).forEach((e, i, arr) => {
        if (i === 0 && e !== ' ') {
            waves.push(str.charAt(0).toUpperCase() + str.slice(i + 1))
        }
        // else if (e === ' ') { }
        else if (e !== ' ' && i !== 0) {
            let firstString = str.slice(0, i);
            let charOfinterst = e.toUpperCase()
            let lastString = str.slice(i + 1)
            waves.push(firstString + charOfinterst + lastString)
        }
    })

    return waves
}
// solution ii
function wave(str) {
    console.log(str)
      let waves = []
      let arr = Array.from(str);
      for (i = 0; i < arr.length; i++) {
            if (str.charAt(i) === ' ') {
              continue
          }
          if (str.charAt(i) === 0 && str.charAt(i)!==' ') {
              waves.push(str.charAt(i).toUpperCase() + str.slice(i + 1))
          }
  
          else {
              let firstString = str.slice(0, i);
              let charOfinterst = str.charAt(i).toUpperCase()
              let lastString = str.slice(i + 1)
              waves.push(firstString + charOfinterst + lastString)
          }
  
      }
    console.log(waves)
      return waves
  }
console.log(wave(' gap'))

