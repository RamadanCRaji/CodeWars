// This time no story, no theory. The examples below show you how to write function accum:



/*
P:
    input is a string puzzle
R:
    return each character duplicated base on the index number+1 and seperated from others with a hyphen -
E:
    Examples:
    accum("abcd") -> "A-Bb-Ccc-Dddd"
    accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
    accum("cwAt") -> "C-Ww-Aaa-Tttt"
    The parameter of accum is a string which includes only letters from a..z and A..Z.
P:
    for every  character duplicate it index+1 
    change str to array using str.split()
    looop through array using map 
       return  e.toUpperCase() +e.repeat(index).toLowerCase()
   

    change arr to string using arr.join('-')
*/
function accum(s) {
    let arr = s.split('').map((e, i) => {
        return e.toUpperCase() + e.repeat(i).toLowerCase();
    });
    return arr.join('-');
}
console.log(accum("abcd"))