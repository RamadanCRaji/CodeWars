// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
/*
input is a string always and may be an empty string
R:
    return true of false if input is an isogram or not 
E:
    isIsogram "Dermatoglyphics" = true
    isIsogram "moose" = false
    isIsogram "aba" = false
P:
    lower all characters to lowerCase using toLowerCase and then split to array str.split()
    use a forEach loop 
        inside loop have a for let loop to compare the current element to the next item
        if element is equal to the next item change incremeant ans by 1
    if ans is greater than 0 return false else return false 
*/
function isIsogram(str) {
    let ans = true;
    str = str.toLowerCase().split('')
    str.forEach((e, ind, arr) => {
        for (let i = ind + 1; i <= arr.length - 1; i++) {
            if (e === arr[i]) {
                ans = false;
            }
        }
    })
    return ans
}
console.log(isIsogram("Dermatoglyphics"))
console.log(isIsogram("aba"))

// code refracrtoring 
/*
For every character char in the array:

    array.indexOf(char) finds the first occurrence of char in the array and returns its index.
    index is the current index of char as we're iterating through the array.
    If a character is repeated in the string, array.indexOf(char) will return the index of its first occurrence, which will be less than the current index. Thus, the condition will be false
*/
function isIsogram(str) {
    str = str.toLowerCase();
    return str.split('').every((char, index, array) => array.indexOf(char) === index);
}