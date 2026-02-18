// https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game/?envType=problem-list-v2&envId=55vr69d7
function tictactoe(moves: number[][]): string {
    const rows: number[] = [0, 0, 0];
    const cols: number[] = [0, 0, 0];
    let diag: number = 0;
    let antiDiag: number = 0;

    for (let i = 0; i < moves.length; i++) {
        const [row, col] = moves[i];
        const player: number = i % 2 === 0 ? 1 : -1; // A = +1, B = -1

        rows[row] += player;
        cols[col] += player;

        if (row === col) diag += player;
        if (row + col === 2) antiDiag += player;

        if (
            Math.abs(rows[row]) === 3 ||
            Math.abs(cols[col]) === 3 ||
            Math.abs(diag) === 3 ||
            Math.abs(antiDiag) === 3
        ) {
            return player === 1 ? "A" : "B";
        }
    }

    return moves.length;
