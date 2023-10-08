/**
    Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

    Examples:


    encrypt("012345", 2)  =>  "135024"  ->  "304152"
    encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

    encrypt("01234", 1)  =>  "13024"
    encrypt("01234", 2)  =>  "13024"  ->  "32104"
    encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
    Together with the encryption function, you should also implement a decryption function which reverses the process.

    If the string S is an empty value or the integer N is not positive, return the first argument without changes.
 */
// inut is string and an integer N
// create a function that returns  all odd-indexes concatenated with all even-indexed characters N number of times 
// if str.length===0 or N<0 return s
// Examples 
// encrypt("012345", 2)  =>  "135024"  ->  "304152"
// encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"
/**
 * check if str.length===0 or N<0 && return s
 * i will need a for loop to concate N number of times 
 * create a vairable called odd and even then assign them an empty string 
 * each time the loop runs check 
    * if i is even and it is then add text[i] to even string 
    * if i is odd then add text[i] to odd string
 * return odd+even 
 * Function to revere this process N number of times 
    * odd numbers are on one side and even on the other side so split the string in half and assign odd characters half to variable named odd and even characters to variable named even
    * use a for loop and perform decryption N number of times 
    * each time the loop runs check if i is even and if it is is then grab the even charcter from 'even' and add it to a variable called 
 */
function encrypt(text, n) {
    if (text === null || text.length === 0 || n <= 0) { return text }
    for (let j = 0; j < n; j++) {
        let odd = ''
        let even = ''
        for (let i = 0; i < text.length; i++) {
            if (i % 2 === 0) { even += text[i] }
            else { odd += text[i] }
        }
        text = odd + even
    }
    return text
}
function decrypt(s, n) {
    if (s === null || s.length === 0 || n <= 0) { return s }
    for (let j = 0; j < n; j++) {
        let half = Math.floor(s.length / 2); // if it was 5 then it will be 3.5 when we divide 

        let oddChars = s.slice(0, half) // this will grab the first odd 
        let evenChars = s.slice(half) //grabs the rest of the string  

        let result = ''

        //now interweave even and odd charactes
        for (let i = 0; i < evenChars.length; i++) {
            result += evenChars[i]

            //check if corresponding charcter exist in odd

            if (oddChars[i]) {
                result += oddChars[i]
            }
        }
        s = result
    }
    return s
}
// console.log(encrypt('hey there buddy how are you', 1))
console.log(decrypt('hey there buddy how are you', 1))

/**
 this will work for odd situation also. when we have an odd string say, 'abcdefg' and we loop through it once for encryption then we end up with 
    even='aceg'
    odd = bdt 
thenw ehne we combine this two variables together we get acegbdt 
now when it time to decrypt this variable we can split it in half to get the even  on one side and the odd on the other side
this theory means that we will in odd situations then even length will always the logest string since we are basing our encryption of 
 */