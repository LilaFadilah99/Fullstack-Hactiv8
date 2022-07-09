function allAroundYou(board, posX, posY) {
    // write your code here ...
    let output = 0
    for (let i = posY - 1; i <= posY + 1; i++) {
        if (board[i] === undefined) {
            continue
        }
        for (let j = posX - 1; j <= posX + 1; j++) {
            if (board[i][j] === undefined) {
                continue
            } else {
                output += board[i][j]
            }
        }
    }
    return output
}


let board1 = [
    //X 0  1  2  3  4 
    [1, 1, 1, 1, 1], // 0  Y
    [1, 2, 2, 2, 1], // 1
    [2, 2, 3, 2, 1], // 2
    [3, 2, 2, 2, 1], // 3
    [4, 1, 1, 1, 1], // 4
];

let board2 = [
    [2, 1, 3, 9, 0, 5, 8, 5, 7],
    [4, 4, 2, 5, 3, 2, 6, 9, 7],
    [2, 1, 3, 9, 0, 5, 8, 2, 1],
    [6, 5, 3, 0, 3, 0, 4, 1, 1],
];

console.log(allAroundYou(board1, 0, 0)); // 5
console.log(allAroundYou(board1, 2, 2)); // 19
console.log(allAroundYou(board1, 4, 4)); // 5
console.log(allAroundYou(board2, 5, 2)); // 31
console.log(allAroundYou(board2, 8, 3)); // 5
console.log(allAroundYou(board2, 3, 3)); // 18


// Tes Pola
// console.log([1, 1, 1, 1, 1]);
// console.log([1, 2, 2, 2, 1]);
// console.log(1, 1);
// console.log(1, 2);

// console.log([1, 2, 3, 4, 5]);
// console.log([1, 2, 3, 4, 5]);
// console.log([1, 2, 3, 4, 5]);
// console.log([1, 2, 3, 4, 5]);
// console.log(2, 3, 4);
// console.log(2, 3, 4);
// console.log(2, 3, 4);
// console.log(4,5)
// console.log(4,5);
// console.log(4,5);

module.exports = allAroundYou;