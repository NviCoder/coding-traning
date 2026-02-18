// https://leetcode.com/problems/sign-of-the-product-of-an-array/?envType=problem-list-v2&envId=55vr69d7
function arraySign(nums: number[]): number {
    let negativeCounter = 0;

    for (const x of nums) {
        if (x === 0) return 0;       // עצירה מידית אם יש אפס
        if (x < 0) negativeCounter++; // סופר מספרים שליליים
    }

    // אם מספר האיברים השליליים זוגי → חיובי, אחרת שלילי
    return negativeCounter % 2 === 0 ? 1 : -1;
}

console.log(arraySign([-1,1,-1,1,-1])); // -1
