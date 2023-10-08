// Implement a Tic-Tac-Toe (AKA: Noughts and crosses, Xs and Os) solver. The input to the solver function will be an array of length 9 representing the board. Output of the function will be the index of the desired move (0-8). You will always be X. You must make a valid move, and a winning move if available.

// input is an array with 9 elements each representing the moves made with x and o 
// return all the indexes that of the desired move that will make me win
// example 
/*
 0 | 1 | 2
---+---+---
 3 | 4 | 5
---+---+---
 6 | 7 | 8 

solveTTT(['O', '', '', 'O', 'X', '', 'X', 'O', 'X'])
 0 |   |  
---+---+---
 O | X |  
---+---+---
 X | 0 | X 
output will only be 2 because only at index two will I be able to connect all X's
*/
//P
/**
 * assume all input are the final input 
 * convert the 1d array into 2D array using a helper funtion
    * use a for loop and each time it runs push board[i] into row[] and each time row.length=3 push it into total board. 
* compare rows aka the subArrays to see which row has two elemet that are equal to X
* if found then find its the column that give the win
* check for columns 
* loop through the sub array and collect the elements in each columns then save them in a variable called ColumnOfInterest
* totalboard[0][columnIndex],totalboard[1][columnIndex],totalboard[2][columnIndex]
* filter the ColumnOfInterest to find any element is equal to varible of interest(either X or O) if true
    * if true that means we have found the row that will give us a win
    * find the index whose value is ==='' this will tell us the sub array it came from which translate to the row it came from now
    * note this in 2D so far and  we need to convert it to a 1D array
        * [X,X,'']
        * I have three rows and i am at at column so so index
        * so ans will be index *3 plus column i am in which is column index
* check diagonals 
    * store the left to right diagonals in a varible called diagoanl1 and right to left in a variable called diagonal2
    * filter through diagonal1 for variable of interest, check if its equal to 2 and is indcludes ' '
    * find that index and multiply by 4 and return it 
    * do the same for diagonal 2 except multiply by 2 and then increamnet by two
 */

function solveTTT(board) {
    let totalBoard = subArrCreator(board);
    for (let type of ['X', 'O']) {
        let ans;

        // check rows
        totalBoard.forEach((e, rowNumber) => {
            if (twoOfTypeAndEmpty(e, type)) {
                let index = e.indexOf('');
                ans = index + (rowNumber * 3);
            }
        });
        if (ans !== undefined) return ans;

        // check columns
        [0, 1, 2].forEach(columnIndex => {
            let columnsOfInterest = [totalBoard[0][columnIndex], totalBoard[1][columnIndex], totalBoard[2][columnIndex]];
            if (twoOfTypeAndEmpty(columnsOfInterest, type)) {
                let index = columnsOfInterest.indexOf('');
                ans = (index * 3) + columnIndex;
            }
        });
        if (ans !== undefined) return ans;

        // checking diagonals 
        let diagonal1 = [totalBoard[0][0], totalBoard[1][1], totalBoard[2][2]];
        let diagonal2 = [totalBoard[0][2], totalBoard[1][1], totalBoard[2][0]];
        if (twoOfTypeAndEmpty(diagonal1, type)) {
            return diagonal1.indexOf('') * 4;
        }
        if (twoOfTypeAndEmpty(diagonal2, type)) {
            return diagonal2.indexOf('') * 2 + 2;
        }
    }
    return board.indexOf('');
}

function subArrCreator(boardOfInterest) {
    let holder = [];
    let row = [];
    for (let i = 0; i < boardOfInterest.length; i++) {
        if (row.length === 3) {
            holder.push(row);
            row = [];
        }
        row.push(boardOfInterest[i]);
    }
    if (row.length) {
        holder.push(row);
    }
    return holder;
}

function twoOfTypeAndEmpty(arr, type) {
    return arr.filter(e => e === type).length === 2 && arr.includes('');
}
