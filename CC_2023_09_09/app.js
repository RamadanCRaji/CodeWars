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
    // Convert the board to a 2D array using your method
    let totalBoard = [];
    let row = [];
    for (let i = 0; i < board.length; i++) {
        if (row.length === 3) {
            totalBoard.push(row);
            row = [];
        }
        row.push(board[i]);
    }
    if (row.length) {
        totalBoard.push(row);
    }

    // Check for a winning move or a blocking move
    for (let type of ['X', 'O']) {
        for (let i = 0; i < 3; i++) {
            // Check rows
            if (totalBoard[i].filter(x => x === type).length === 2) {
                let index = totalBoard[i].indexOf('');
                if (index !== -1) return i * 3 + index;
            }

            // Check columns
            if ([totalBoard[0][i], totalBoard[1][i], totalBoard[2][i]].filter(x => x === type).length === 2) {
                for (let j = 0; j < 3; j++) {
                    if (!totalBoard[j][i]) return j * 3 + i;
                }
            }
        }

        // Check diagonals
        let diagonal1 = [totalBoard[0][0], totalBoard[1][1], totalBoard[2][2]];
        let diagonal2 = [totalBoard[0][2], totalBoard[1][1], totalBoard[2][0]];

        if (diagonal1.filter(x => x === type).length === 2 && diagonal1.includes('')) {
            return diagonal1.indexOf('') * 4; // Multiplication by 4 because of the flat array index increment in the main diagonal.
        }

        if (diagonal2.filter(x => x === type).length === 2 && diagonal2.includes('')) {
            return diagonal2.indexOf('') * 2 + 2; // Multiplication by 2 and addition of 2 because of the flat array index increment in the secondary diagonal.
        }
    }

    // If no winning or blocking move, just return a valid move
    return board.indexOf('');
}

// Test the function
let board = ['X', 'X', '', 'O', 'O', '', '', '', ''];
console.log(solveTTT(board)); // Expected: 2 (winning move for X)

