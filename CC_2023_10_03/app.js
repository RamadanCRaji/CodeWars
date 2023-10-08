//create a ches board based on the input and ensure it in N by N where N is an integer
/**
 * create a variable called chessboard
 * create a variable called row holder
 * use a for loop for the the row
    * nest another for loop to handle to shade of the column numbers 
    * if row+col %2==0 then push W in into the row holder 
    * else push B into the row
* after the inner loop has completed push the row into the chessboard
 * at the end join the array using arr.join('\n')
 */


function chess(n) {
    let chessBoard = [];
    for (let row = 0; row < n; row++) {
        let currentRow = []
        for (let col = 0; col < n; col++) {
           ( row + col) % 2 === 0 ? currentRow.push('B') : currentRow.push('W')
        }
        chessBoard.push(currentRow.join(' '))
    }
   return  chessBoard.join('\n')
}

console.log(chess(8))