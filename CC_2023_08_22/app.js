// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

/*
P:
    input will be a string 
R:
    return a string aside from substrings after the anchor
E:
    "www.codewars.com#about" --> "www.codewars.com"
    "www.codewars.com?page=1" -->"www.codewars.com?page=1"
P:
    i am split the string so i need to use array.slice
    have two condtionals 
        check if string includes # and if it does:
            get the index of # 
            slice string up until index
            return 
        if str does not include then retrurn string 
*/
function removeUrlAnchor(url) {
    if (!url.includes('#')) { return url }
    let index = url.indexOf('#');
    return url.slice(0, index)
}
console.log(removeUrlAnchor('www.codewars.com/katas/'))
console.log(removeUrlAnchor('www.codewars.com/katas/?page=1#about'))
//code refractror 
function removeUrlAnchor(url) {
    let str = url.split('#')[0];
    return str[0]
}