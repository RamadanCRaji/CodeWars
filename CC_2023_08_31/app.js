// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

/*
P: input will be a string of one more words
R:
    return the same string but reverse any word that is longer than or equal to  5
E:
    spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
    spinWords( "This is a test") => returns "This is a test" 
    spinWords( "This is another test" )=> returns "This is rehtona test"
P:
    change the string into an arr using str.split()
    using map because i will be transforming some of the elemetn in the array 
        set a condtion 
            if str.length>5 the str.split('').reverse.join('')
            else return str
    return arr.join(' ')
*/
function spinWords(string) {
    let arr = string.split(' ').map(e => e.length >= 5 ? e.split('').reverse().join('') : e);
    return arr.join(' ')
}
console.log(spinWords("This is a test"))
console.log(spinWords("Hey fellow warriors"))
console.log(spinWords("Just kidding there is still one more"))