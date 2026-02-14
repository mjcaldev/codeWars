export function findMissingLetter(array: string[]): string {
  for (let i = 0; i < array.length - 1; i++) {
    const currentCode = array[i].charCodeAt(0);
    const nextCode = array[i + 1].charCodeAt(0);
​
    // If the difference is more than 1, find the gap
    if (nextCode - currentCode > 1) {
      return String.fromCharCode(currentCode + 1);
    }
  }
​
  // According to problem statement, this should never happen
  throw new Error("No missing letter found");
}