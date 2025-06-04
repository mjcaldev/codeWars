// The approach
// 1. Split the input string into individual items using " " (space).
// 2. Extract the letter and number from each item (e.g. "24z6" → letter: 'z', number: 246)
// 3. Sort items by letter, maintaining order of first occurrence for duplicates.
// 4. Convert the sorted items to pure numbers (strip the letter).
// 5. Perform operations in order: + - * / repeating as needed.
// 6. Round the result to the nearest integer.
​
​
function doMath(string) {
  // Step 1: Split string into parts
  const parts = string.split(" ");
​
  // Step 2: Extract letter and number from each part
  const withLetters = parts.map((item, idx) => {
    const letter = item.match(/[a-zA-Z]/)[0];
    const number = parseInt(item.replace(/[a-zA-Z]/, ""));
    return { letter, number, originalIndex: idx };
  });
​
  // Step 3: Sort by letter, maintaining input order for duplicates
  withLetters.sort((a, b) => {
    if (a.letter === b.letter) {
      return a.originalIndex - b.originalIndex;
    }
    return a.letter.localeCompare(b.letter);
  });
​
  // Step 4: Extract just the numbers
  const numbers = withLetters.map(obj => obj.number);
​
  // Step 5: Perform operations in sequence: + - * / ...
  const operations = ['+', '-', '*', '/'];
  let result = numbers[0];
​
  for (let i = 1; i < numbers.length; i++) {
    const op = operations[(i - 1) % operations.length];
    if (op === '+') result += numbers[i];
    if (op === '-') result -= numbers[i];
    if (op === '*') result *= numbers[i];
    if (op === '/') result /= numbers[i];
  }
​
  // Step 6: Round the final result
  return Math.round(result);
}
​
//Wah lah ;)