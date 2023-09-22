// Your task, is to create N×N multiplication table, of size provided in parameter.

// For example, when given size is 3:



/**
 * input in an integer
 * return a N by N multiplication table
 * example 
    * 1 2 3
    * 2 4 6
    * 3 6 9
    *  the return value should be: [[1,2,3],[2,4,6],[3,6,9]]
* use a for loop 
    *i will be the base determinant for the tabel
    have another for loop that runs up until N
    inside the inner looop incremet j by i and push it to a row holder
    when done push it to final arr answer
    return arr.join('')
    *
*/
multiplicationTable = function (size) {
    let arrAns = []
    for (let i = 1; i <= size; i++) {
        let holder = []
        for (let j = 1; j <= size; j++) {
            let value = (i) * (j);
            holder.push(value)// 
        }
        arrAns.push(holder)
    }
    console.log(arrAns)
}
multiplicationTable(3)
