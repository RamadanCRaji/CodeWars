function chess() {
    let chessBoard = [];

    for (let row = 0; row < boardSize; row++) {
        let currentRow = [];
        for (let col = 0; col < boardSize; col++) {
            if ((row + col) % 2 === 0) {
                currentRow.push('W'); // White square
            } else {
                currentRow.push('B'); // Black square
            }
        }
        chessBoard.push(currentRow.join(' '));
    }
    return chessBoard.join('\n')
}