'use stirct'
// Write a function that takes a filename as string,
// open and read it. The file data represents a tic-tac-toe
// game result. Return 'X'/'O'/'draw' based on which player
// has winning situation.
export { };

declare function require(path: string): any;
let fs = require('fs');
let charEncoding = 'utf-8'

function ticTacResult(filePath: string) {
    try {
        let theRealWinner: string = fs.readFileSync(filePath, 'utf-8').split('\r\n');
        if (
            (theRealWinner[0] === 'OOO') ||
            (theRealWinner[1] === 'OOO') ||
            (theRealWinner[2] === 'OOO') ||
            (theRealWinner[0][0] === theRealWinner[0][1] && theRealWinner[0][1] === theRealWinner[0][2] && theRealWinner[0][2] === 'O') ||
            (theRealWinner[1][0] === theRealWinner[1][1] && theRealWinner[1][1] === theRealWinner[1][2] && theRealWinner[1][2] === 'O') ||
            (theRealWinner[2][0] === theRealWinner[2][1] && theRealWinner[2][1] === theRealWinner[2][2] && theRealWinner[2][2] === 'O') ||
            (theRealWinner[0][0] === theRealWinner[1][0] && theRealWinner[1][0] === theRealWinner[2][0] && theRealWinner[2][0] === 'O') ||
            (theRealWinner[0][1] === theRealWinner[1][1] && theRealWinner[1][1] === theRealWinner[2][1] && theRealWinner[2][1] === 'O') ||
            (theRealWinner[0][2] === theRealWinner[1][2] && theRealWinner[1][2] === theRealWinner[2][2] && theRealWinner[2][2] === 'O') ||
            (theRealWinner[0][0] === theRealWinner[1][1] && theRealWinner[1][1] === theRealWinner[2][2] && theRealWinner[2][2] === 'O') ||
            (theRealWinner[0][2] === theRealWinner[1][1] && theRealWinner[1][1] === theRealWinner[2][0] && theRealWinner[2][0] === 'O')) {
            return 'the winner is O';
        } else if (
            (theRealWinner[0] === 'XXX') ||
            (theRealWinner[1] === 'XXX') ||
            (theRealWinner[2] === 'XXX') ||
            (theRealWinner[0][0] === theRealWinner[0][1] && theRealWinner[0][1] === theRealWinner[0][2] && theRealWinner[0][2] === 'X') ||
            (theRealWinner[1][0] === theRealWinner[1][1] && theRealWinner[1][1] === theRealWinner[1][2] && theRealWinner[1][2] === 'X') ||
            (theRealWinner[2][0] === theRealWinner[2][1] && theRealWinner[2][1] === theRealWinner[2][2] && theRealWinner[2][2] === 'X') ||
            (theRealWinner[0][0] === theRealWinner[1][0] && theRealWinner[1][0] === theRealWinner[2][0] && theRealWinner[2][0] === 'X') ||
            (theRealWinner[0][1] === theRealWinner[1][1] && theRealWinner[1][1] === theRealWinner[2][1] && theRealWinner[2][1] === 'X') ||
            (theRealWinner[0][2] === theRealWinner[1][2] && theRealWinner[1][2] === theRealWinner[2][2] && theRealWinner[2][2] === 'X') ||
            (theRealWinner[0][0] === theRealWinner[1][1] && theRealWinner[1][1] === theRealWinner[2][2] && theRealWinner[2][2] === 'X') ||
            (theRealWinner[0][2] === theRealWinner[1][1] && theRealWinner[1][1] === theRealWinner[2][0] && theRealWinner[2][0] === 'X')) {
                return 'the winner is X';
            } else {
                return 'its a draw';
            }

    } catch (error) {
        return 'OOPS! You are a dumbo!';
    };
};

console.log(ticTacResult('win-o.txt'))
 //
 console.log(ticTacResult('win-x.txt'))
// should print X
console.log(ticTacResult('draw.txt'))
// should print draw*/