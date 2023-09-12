/*Implement a Tic-Tac-Toe (AKA: Noughts and crosses, Xs and Os) solver. The input to the solver function will be an array of length 9 representing the board. Output of the function will be the index of the desired move (0-8). You will always be X. You must make a valid move, and a winning move if available.

The board is represented as an array with the following indexes:
The board is represented as an array with the following indexes:

 0 | 1 | 2
---+---+---
 3 | 4 | 5
---+---+---
 6 | 7 | 8 
For example, the following board would be represented as

solveTTT(['', '', '', 'O', '', '', 'X', '', ''])

   |   |  
---+---+---
 O |   |  
---+---+---
 X |   |   
 Valid outputs for the above input would be 0, 1, 2, 4, 5, 7 or 8.
 The following board would only have 1 correct output (2) because it is the only move that connects 3 X's in a row:

solveTTT(['O', '', '', 'O', 'X', '', 'X', 'O', 'X'])
 0 |   |  
---+---+---
 O | X |  
---+---+---
 X | 0 | X 
/**
 * input will be a string containg either O or x's and array of length of 9
 * return the index of the desired move that shows which index is  connected choice 
 * example 
 * Pseudo code 
    * Use the first array as comparison to check against other indexes and see if their elements are the same
    * and if it the same push that into an array
    * create a for loop to loop throgh the input 
        *  insde tht loop declare an empty array named row
        *  on each loop run we wil check to row.length is 3
            * if false continue pushing items into it 
            * if true then push array row into the outter array holder and reset arr=[]
        * At the end of the for loop i will have an array of sub arrays 
        * use the first array as comparison and loop though the other arrays to see which elements are the 
        * [[a,d,r],[a,f,t],[a,g,w]]
* * */
// returns index of move

function solveTTT(board) {
    let totalBoard = [];
    let row = [];
    let result = []
    for (let i = 0; i < board.length; i++) {
        if (row.length === 3) {
            totalBoard.push(row)
            row = [];
        }
        row.push(board[i])
    }
    if (row.length) { totalBoard.push(row) }
    console.log(totalBoard)
    for (let i = 0; i < totalBoard.length; i++) {
        // this checks for diagoal top let to bottom left 
        if (totalBoard[i][0] === totalBoard[1][1] && totalBoard[i][0] === totalBoard[2][2]) {
            result.push(i)
        }
        // this checks for diagoal top right to bottom right 
        if (totalBoard[i][2] === totalBoard[1][1] && totalBoard[i][2] === totalBoard[2][i]) {
            result.push(i)
        }
        // now row
        if (totalBoard[i][0] === totalBoard[i][1] && totalBoard[i][0] === totalBoard[i][3]) {
            result.push(i)
        }
        if (totalBoard[0][i] === totalBoard[1][i] && totalBoard[0][i] === totalBoard[2][i]) {
            result.push(i)
        }
    }
    console.log(result)
}

// 0 | 1 | 2     so i will check if row
// ---+---+---
//  3 | 4 | 5
// ---+---+---
//  6 | 7 | 8 
solveTTT(['O', '', '', 'O', 'X', '', 'X', 'O', 'X'])
// potential checks
// row 1 is the same or row 2 is the same or row 3 is the same
// column 1 is the same, column  2 is the same column 3 is the same 
// diaoganal checks arr[0][0] ===arr[1][1] and arr[0][0]===arr[2][2]
// the other diagonals arr[0][2] ===arr[1][1] and arr[0][0] ===arr[2][0]

function solveTTT(board) {
    let totalBoard = [];
    let row = [];
    let result = []
    for (let i = 0; i < board.length; i++) {
        if (row.length === 3) {
            totalBoard.push(row)
            row = [];
        }
        row.push(board[i])
    }
    if (row.length) { totalBoard.push(row) }
    console.log(totalBoard)
    for (let i = 0; i < totalBoard.length; i++) {
        // this checks for diagoal top let to bottom left 
        if (totalBoard[i][0] === totalBoard[1][1] && totalBoard[i][0] === totalBoard[2][2]) {
            result.push(i)
        }
        // this checks for diagoal top right to bottom right 
        if (totalBoard[i][2] === totalBoard[1][1] && totalBoard[i][2] === totalBoard[2][i]) {
            result.push(i)
        }
        // now row
        if (totalBoard[i][0] === totalBoard[i][1] && totalBoard[i][0] === totalBoard[i][2]) {
            result.push(i)
        }
        //  columns checks 
        if (totalBoard[0][i] === totalBoard[1][i] && totalBoard[0][i] === totalBoard[2][i]) {
            result.push(i)
        }
        
    }
    console.log(result)
}

if (totalBoard[i][0] === totalBoard[1][1] && totalBoard[i][0] === totalBoard[2][2]) {
    result.push(i)
}
// this checks for diagoal top right to bottom right 
if (totalBoard[i][2] === totalBoard[1][1] && totalBoard[i][2] === totalBoard[2][i]) {
    result.push(i)
}
// now row
if (totalBoard[i][0] === totalBoard[i][1] && totalBoard[i][2]==='') {
    return totalBoard[i][2]
}
//  columns checks 
if (totalBoard[0][i] === totalBoard[1][i] && totalBoard[0][i] === totalBoard[2][i]) {
    result.push(i)
}


function solveTTT(board) {
    let totalBoard = [];
    let row = [];
    let result = []
    for (let i = 0; i < board.length; i++) {
        if (row.length === 3) {
            totalBoard.push(row)
            row = [];
        }
        row.push(board[i])
    }
    if (row.length) { totalBoard.push(row) }
    
}