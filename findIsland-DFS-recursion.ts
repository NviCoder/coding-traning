function DFS(grid: number[][], row: number, col: number) {
    // Boundary and visited check
    if (
        row < 0 || row >= grid.length ||
        col < 0 || col >= grid[0].length ||
        grid[row][col] === 0
    ) {
        return;
    }

    // Mark current cell as visited
    grid[row][col] = 0;

    // Explore all 4 neighbors
    DFS(grid, row + 1, col);
    DFS(grid, row - 1, col);
    DFS(grid, row, col + 1);
    DFS(grid, row, col - 1);
}

function findIslands(grid: number[][]): number {
    if (!grid || grid.length === 0) return 0;

    let count = 0;

    for (let i = 0; i < grid.length; i++) {         // rows
        for (let j = 0; j < grid[0].length; j++) {  // columns
            if (grid[i][j] === 1) {
                count++;
                DFS(grid, i, j);
            }
        }
    }

    return count;
}

// Example usage
const grid = [
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 1]
];

console.log(findIslands(grid)); // Output: 3
