export function isValidWalk(walk: string[]): boolean {
    if (walk.length !== 10) return false; // Walk must be exactly 10 minutes long
​
    let x = 0, y = 0; // Track position
​
    for (let direction of walk) {
        if (direction === 'n') y++; 
        else if (direction === 's') y--; 
        else if (direction === 'e') x++; 
        else if (direction === 'w') x--; 
    }
​
    return x === 0 && y === 0; // Return to the start
}
​