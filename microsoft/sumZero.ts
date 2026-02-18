// https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/?envType=problem-list-v2&envId=55vr69d7
function sumZero(n: number): number[] {
    const result: number[] = [];

    if (n % 2 !== 0) {
        result.push(0);
    }

    for (let i = 1; result.length < n; i++) {
        result.push(i);
        result.push(-i);
    }

    return result.slice(0, n); // רק במידה ונכנסו יותר מדי איברים
}
