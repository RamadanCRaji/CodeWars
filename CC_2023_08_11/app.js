// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.
/*
P:
    two array parameters
R:
    return strings in array1 that are substrings in array2
    sort  in lexical order
E:
    Example 1:
    a1 = ["arp", "live", "strong"]

    a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

    returns ["arp", "live", "strong"]
P:
    use a forEach loop on arr1
    inside arr1 use a for let loop to loop arr2
    set condional 
        if arr2 strings ends with item then push into arr
        I need another condtion that checks if arr already has item and if it does not have item then push it there 
        immeditly break
    return arr.sort 
*/
function inArray(array1, array2) {
    let arr = [];

    array1.forEach((e) => {
        for (let i = 0; i < array2.length; i++) {
            if (array2[i].endsWith(e) && !arr.includes(e)) {
                arr.push(e)
                break;
            }
        }
    })
    return arr.sort();
}
console.log(inArray(["arp", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"]))
console.log(inArray(["tarp", "mice", "bull"], ["lively", "alive", "harp", "sharp", "armstrong"]))
console.log(inArray(['by', 'ou', 'wh', 'pini', 'ple'], ['a', 'best', 'I', 'am', 'reference', 'sample', 'Ruby', 'Ruby', 'updated', '(since', 'ruby-doc.', '1.9?', 'glad', 'browse', 'should', 'for', 'you', 'questions', 'most', 'does', 'have', 'what', 'to']))