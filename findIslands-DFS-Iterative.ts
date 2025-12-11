function DFSIterative(grid: number[][], row: number, col: number) {
    if (!grid || grid.length === 0) return;

    const stack: [number, number][] = [];
    stack.push([row, col]);

    while (stack.length > 0) {
        const cell = stack.pop();
        if (!cell) continue;
        const [r, c] = cell;

        // mark visited
        grid[r][c] = 0;

        // push valid neighbors
        if (r + 1 < grid.length && grid[r+1][c] === 1) stack.push([r+1, c]);
        if (r - 1 >= 0 && grid[r-1][c] === 1) stack.push([r-1, c]);
        if (c + 1 < grid[0].length && grid[r][c+1] === 1) stack.push([r, c+1]);
        if (c - 1 >= 0 && grid[r][c-1] === 1) stack.push([r, c-1]);
    }
}

function findIslands(grid: number[][]): number {
    let counter  = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                counter++;
                DFSIterative(grid, i, j);
            }
        }
    }
    return counter;
}


// Example usage
const grid = [
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 1]
];

console.log(findIslands(grid)); // Output: 3
