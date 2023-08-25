// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

/*
P:
    credit card input as a string
R:
    return the string with all all characters replaced with # except the last four character
E:
    "4556364607935616" --> "############5616"
     "64607935616" -->      "#######5616"
               "1" -->                "1"
                "" -->                 ""    
P:
    use arr.slice to grab all elements up until the last 4 characters arr.slice(0, -4)
    change string to an array using arr.split('') then transform elements using map 
    change the arr to str
    combine with str.slice(-4)


*/
function maskify(cc) {
    return (cc.slice(0, -4).split('')
        .map(e => { return '#' })
        .join('')) + cc.slice(-4)
}
console.log(maskify('Nananananananananananananananana Batman!'))