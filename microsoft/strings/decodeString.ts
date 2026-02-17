function decodeString(s: string): string {
    const stackNum: number[] = []; 
    const stackStr: string[] = [];
    
    let currentStr = "";
    let currentNum = 0;
    
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        
        if (!isNaN(Number(char))) {
            // Build multi-digit number
            currentNum = currentNum * 10 + Number(char);
        } 
        else if (char === '[') {
            // Push current state to stack
            stackNum.push(currentNum);
            stackStr.push(currentStr);
            
            // Reset for new substring
            currentNum = 0;
            currentStr = "";
        } 
        else if (char === ']') {
            const repeatTimes = stackNum.pop()!;
            const previousStr = stackStr.pop()!;
            
            currentStr = previousStr + currentStr.repeat(repeatTimes);
        } 
        else {
            // Regular character
            currentStr += char;
        }
    }
    
    return currentStr;
}
