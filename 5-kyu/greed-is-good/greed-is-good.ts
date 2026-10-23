​
export function score(dice: number[]): number {
  // Array index = die value; stored value = frequency
  const counts = [0, 0, 0, 0, 0, 0, 0];
​
  // Running score
  let total = 0;
​
  // Count occurrences of each die
  for (const die of dice) {
    counts[die]++; // ++ means add 1
  }
​
  // Check each die value (1 through 6)
  for (let die = 1; die <= 6; die++) {
    if (counts[die] >= 3) { // At least 3 matching dice
​
      // Ternary: if die is 1, add 1000; otherwise die * 100
      total += die === 1 ? 1000 : die * 100;
​
      // Remove the 3 dice already scored
      counts[die] -= 3;
    }
  }
​
  // Remaining 1s score 100 points each
  total += counts[1] * 100;
​
  // Remaining 5s score 50 points each
  total += counts[5] * 50;
​
  return total; // Final score
}
​