// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

// Example 1:


/*
P:
    2 list of arrays each containing strings
R:
    return a sorted array of a1 which are substrings of strings in a2
    lexicographical order
E:
    a1 = ["arp", "live", "strong"]

    a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

    returns ["arp", "live", "strong"]

    Example 2:
    a1 = ["tarp", "mice", "bull"]

    a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

    returns []
P
    use str.endsWith() to see if the string ends with item that was just iterated over
    use a forEach loop to loop through the element 
        inside the callback fucntion use a for let loop to loop through arr and each time checkig to see if the elements ends with str. 
        if it does the arr.push (item to arr)
    after return arr.sort
*/

/*function inArray(array1, array2) {
    let arr = [];
    array1.forEach((item) => {
        for (let i = 0; i < array2.length; i++) {
            let str = array2[i];// grabs the str in array2
            let char = str.endsWith(`${item}`) ? `${item}` : null;
            arr.includes(`${item}`) ? null : arr.push(char);
        }
    })
    return arr.filter(item => item !== null).sort()
}
*/

// First solution is problematic because we push false positives and time complexity is too high

function inArray(array1, array2) {
    let arr = [];

    array1.forEach((item) => {
        for (let i = 0; i < array2.length; i++) {
            if (array2[i].endsWith(item) && !arr.includes(item)) {
                arr.push(item);
                break; // no need to check other strings in array2 for this item
            }
        }
    });

    return arr.sort();
}


console.log(inArray(["arp", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"]))
console.log(inArray(["tarp", "mice", "bull"], ["lively", "alive", "harp", "sharp", "armstrong"]))
console.log(inArray(["gla", 'pini', 'ple', '1.9'], ['I', 'you', '(since,questions,somewhere).', '1.9?', 'the', 'I', 'sample;', 'have', 'not', 'for', 'versioning;', 'Ruby', 'you', 'what', 'comment)', 'have', 'am', 'that', 'does']))