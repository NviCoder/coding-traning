function BFS(grid: number[][], row: number, col: number) {
    const queue: [number, number][] = [];
    queue.push([row, col]);

    while (queue.length > 0) {
        const [r, c] = queue.shift()!;

        // mark visited
        grid[r][c] = 0;

        // push valid neighbors
        if (r + 1 < grid.length && grid[r + 1][c] === 1) queue.push([r + 1, c]);
        if (r - 1 >= 0 && grid[r - 1][c] === 1) queue.push([r - 1, c]);
        if (c + 1 < grid[0].length && grid[r][c + 1] === 1) queue.push([r, c + 1]);
        if (c - 1 >= 0 && grid[r][c - 1] === 1) queue.push([r, c - 1]);
    }
}
