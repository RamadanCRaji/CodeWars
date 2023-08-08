// You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.



// In the same way:
// longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
// n being the length of the string array, if n = 0 or k > n or k <= 0 return "" (return Nothing in Elm, "nothing" in Erlang).

// Note
// consecutive strings : follow one after another without an interruption

/*
P:
    two parameters- array list and integer number 
R:
    return the first longest string consisting of k consecutive strings
    if n = 0 or k > n or k <= 0 return ""
E:
    strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

    Concatenate the consecutive strings of strarr by 2, we get:

    treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
    folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
    trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
    blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
    abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

    Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
    The first that came is "folingtrashy" so 
    longest_consec(strarr, 2) should return "folingtrashy".
P:
    first check for condional 
    n=arr.length
    if n === 0 or k > n or k <= 0 return ''
    i need the length of the concat strings to get
    use a for loop to concat string in number
    i can use Math.max to get the max number
    and then loop the array using arry.find to see which elements arr.length === max number
*/
function longestConsec(strarr, k) {
    let n = strarr.length;
    let arr = [];
    let nums = []
    if (n === 0 || k > n || k <= 0) { return '' }
    // k = k - 1; // k=1
    for (let i = 0; i < strarr.length; i++) { // i need to add k number of strings 
        let str = strarr[i]; // get the base string
        for (let x = i + 1; x <= k; x++) {
            str = str + strarr[x] //x=2
        }
        arr.push([str, str.length])
        nums.push(str.length)
    }
    console.log(arr)
    nums = Math.max(...nums);// this get the get highest string length
    let ans = arr.find((item) => item[0] === nums)
    return ans[0][1];
}
console.log(longestConsec(["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], 2))
/*
first run 
 i=0; x= 1 (0+1), is  is x<3? yes so this works ------> two words total 
 second run in the innner loop
 x=2 is x<3? true then this works now we have three words concatted 



*/ 