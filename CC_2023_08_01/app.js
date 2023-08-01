// Task
// You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the scores.

// Note: the scores will always be unique (so no duplicate values)

/*
P:
    input is a hash object
        language propery 
        score values
R
    an array of languafes where test scores are greate that 60 in descenging order

E:
    {"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
    {"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
    {"C++": 50, "ASM": 10, "Haskell": 20}     -->  []
P:
Method 1
========
    use object.keys(result) to get the keys of the object  
    use arr.filter
        -since keys are know now i can filter based on this condition result[key>69]
    use arr.sort()
        - use a,b
            result[b]-result[a]
        - a condtion that checks with properyt meets the criteria 
        - push that to an array

Another method 
=============
    use object.entries to 2d arry of the objects key-value pairs such [key,value]
    use arr.filter
        each item will be an array, to get the spoint then item[1]>60
    then use arr.sort
        itemA=array
        itemB=arry
        arr.sort(itemA,ItemB)=>ItemB[1]-ItemA[1])
*/
function myLanguages(results) {
    return Object.keys(results)  // Get all keys (languages)
        .filter(key => results[key] >= 60)  // Filter by proficiency score
        .sort((a, b) => results[b] - results[a]);  // Sort by score in descending order
}

function anotherVersion(results) {
    let arr = Object.entries(results)
        .filter((item) => item[1] > 60)
        .sort((itemA, itemB) => itemB[1] - itemA[1])
        .map(item => {
            return item[0]
        })
        return arr
}
console.log(anotherVersion({ "Java": 10, "Ruby": 80, "Python": 65 }))
console.log(myLanguages({ "Java": 10, "Ruby": 80, "Python": 65 }))