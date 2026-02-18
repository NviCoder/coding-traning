// https://leetcode.com/problems/remove-digit-from-number-to-maximize-result/?envType=problem-list-v2&envId=55vr69d7
function removeDigit(number: string, digit: string): string {
    let result = ""; // to store the maximum number

    // Loop through the string
    for (let i = 0; i < number.length; i++) {
        if (number[i] === digit) {
            // Remove this occurrence
            let candidate = number.slice(0, i) + number.slice(i + 1);
            
            // Keep the maximum
            if (candidate > result) {
                result = candidate;
            }
        }
    }

    return result;
}
