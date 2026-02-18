// https://leetcode.com/problems/max-chunks-to-make-sorted-ii/description/?envType=problem-list-v2&envId=55vr69d7
function maxChunksToSorted(arr: number[]): number {
    const n = arr.length;
    if (n === 0) return 0;

    const prefixMax: number[] = new Array(n);
    const suffixMin: number[] = new Array(n);

    // Build prefix max
    prefixMax[0] = arr[0];
    for (let i = 1; i < n; i++) {
        prefixMax[i] = Math.max(prefixMax[i - 1], arr[i]);
    }

    // Build suffix min
    suffixMin[n - 1] = arr[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        suffixMin[i] = Math.min(suffixMin[i + 1], arr[i]);
    }

    // Count valid cuts
    let chunks = 1; // at least one chunk
    for (let i = 0; i < n - 1; i++) {
        if (prefixMax[i] <= suffixMin[i + 1]) {
            chunks++;
        }
    }

    return chunks;
}
