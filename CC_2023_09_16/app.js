// Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

// Examples:

// 
// encrypt("012345", 2)  =>  "135024"  ->  "304152"
// encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

// encrypt("01234", 1)  =>  "13024"
// encrypt("01234", 2)  =>  "13024"  ->  "32104"
// encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
// Together with the encryption function, you should also implement a decryption function which reverses the process.

// If the string S is an empty value or the integer N is not positive, return the first argument without changes.

/**
 * input will be a string and a given integer
 * return a new string with all the odd-indexes characters concated with all the even-indexed character of S
    * Create function to decipher this 
 * Example
    * encrypt("012345", 1)  =>  "135024"
    * encrypt("012345", 2)  =>  "135024"  ->  "304152"
    *encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"
    *
    * encrypt("01234", 1)  =>  "13024"
    * encrypt("01234", 2)  =>  "13024"  ->  "32104"
    * encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
 * Pseudocode
    *Check if N is <0 or S is empty then return S 
    * Encryption
        *create a variable that holds the final ans
        use a for loop  to loop through the string and filter out the odds and even. Store them in seperate variables 
        * concate then afater adn return value 
    * Decryption
        * since all the odd numbers are on one side and even index characters are on the other side then we get the
        * store the odd data in seperate variable and same for even 
        * nest another for-loop inside the intial for-loop 
            * grab the first part of the string using str.slice
                * use math.ceil to account for instance of odd string length 
            * interweave the even and odd numbers n number of times and on each iteration set text to be equal to the new string
        * 
*/
function encrypt(text, n) {
    if (!text || text.length === 0 || n <= 0) { return text; }

    for (let i = 0; i < n; i++) {
        let oddChars = '';
        let evenChars = '';

        for (let j = 0; j < text.length; j++) {
            if (j % 2 === 0) {
                evenChars += text[j];
            } else {
                oddChars += text[j];
            }
        }
        text = oddChars + evenChars;
    }
    return text;
}

function decrypt(s, n) {
    if (!s || s.length === 0 || n <= 0) { return s }
    for (let i = 0; i < n; i++) {
        let oddChars = s.slice(0, Math. floor(s.length / 2));
        let evenChars = s.slice(Math.floor(s.length / 2));

        let result = '';
        /**
         * We will take characters from the second half of the encrypted string (originally even indices) and interleave them with characters from the first half (originally odd indices).
         */
        for (let j = 0; j < evenChars.length; j++) {
            result += evenChars[j];
            if (oddChars[j]) {
                result += oddChars[j];
            }
        }
        s = result;
    }
    return s;
}
'abc3'

console.log(decrypt('ih ssia t se!t', 3))
