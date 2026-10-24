export function uniqueInOrder(
  iterable: string | (string | number)[] // Accept string or array
): (string | number)[] {                 // Return array of strings/numbers
​
  return Array.from(iterable)             // Convert input into an array
    .filter((item, index, array) =>       // Check each item
      index === 0 ||                     // Keep first item automatically
      item !== array[index - 1]          // Keep if different from previous
    );
}