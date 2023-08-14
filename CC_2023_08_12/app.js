function shuffle(arr) {
    let last_index = arr.length - 1;
    while (last_index > 0) {
        // Ensuring random_index is between 0 and last_index (inclusive)
        let random_index = Math.floor(Math.random() * (last_index + 1));

        // Creating elements to swap
        let LastElmt = arr[last_index];
        let randElem = arr[random_index];

        // Swapping
        arr[random_index] = LastElmt;
        arr[last_index] = randElem;

        last_index -= 1;
    }
}


// Write a function partlist that gives all the ways to divide a list (an array) of at least two elements into two non-empty parts.

// Each two non empty parts will be in a pair (or an array for languages without tuples or a structin C - C: see Examples test Cases - )
// Each part will be in a string
// Elements of a pair must be in the same order as in the original array.

// Examples of returns in different languages:
// a = ["az", "toto", "picaro", "zone", "kiwi"] -->
// [["az", "toto picaro zone kiwi"], ["az toto", "picaro zone kiwi"], ["az toto picaro", "zone kiwi"], ["az toto picaro zone", "kiwi"]] 
// or
//  a = {"az", "toto", "picaro", "zone", "kiwi"} -->
// {{"az", "toto picaro zone kiwi"}, {"az toto", "picaro zone kiwi"}, {"az toto picaro", "zone kiwi"}, {"az toto picaro zone", "kiwi"}}
// or
// a = ["az", "toto", "picaro", "zone", "kiwi"] -->
// [("az", "toto picaro zone kiwi"), ("az toto", "picaro zone kiwi"), ("az toto picaro", "zone kiwi"), ("az toto picaro zone", "kiwi")]
// or 
// a = [|"az", "toto", "picaro", "zone", "kiwi"|] -->
// [("az", "toto picaro zone kiwi"), ("az toto", "picaro zone kiwi"), ("az toto picaro", "zone kiwi"), ("az toto picaro zone", "kiwi")]
// or
// a = ["az", "toto", "picaro", "zone", "kiwi"] -->
// "(az, toto picaro zone kiwi)(az toto, picaro zone kiwi)(az toto pica, zone kiwi)(az toto picaro zone, kiwi)"

/*
P:
    an array of strings
    all returned sub arrays must have equal pairs 
R:
    divide the array of at leaste two elemenst into two non-empty parts 
    all sub arrays must be in pairs and havind different possible combinations 
E: 
    arr['hello,'hey']--> [['hello],['hey']]
P:
    arr[i].length must be two 
    start a for let loop and go untill i<arr.length 
    use arr.slice to get two superatre string combo
    create sub array with the new strings
    arr.push subArr

*/
function partlist(arr) {
    let results = [];

    for (let i = 0; i < arr.length - 1; i++) {
        let firstPart = arr.slice(0, i + 1).join(' '); //
        let secondPart = arr.slice(i + 1).join(' ');
        results.push([firstPart, secondPart]);
    }
    return results;
}
//i choose to use arr.length-1 becuase i only wanted to use all the elements inside the array and also arr.slice() excludes last item

console.log(partlist(["a", "b", "c", "d"]));
// i =3 arr.length-1=3 
