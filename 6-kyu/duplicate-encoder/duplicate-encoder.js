function duplicateEncode(word){
  // Convert to lowercase to ignore capitalization
  let lowerCaseWord = word.toLowerCase();
  
  // Create an object to store character counts
  let charCount = {};
​
  // First pass: Count occurrences of each character
  for (let char of lowerCaseWord) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
​
  // Second pass: Construct the output string
  return lowerCaseWord
    .split('')
    .map(char => charCount[char] > 1 ? ')' : '(') // Replace based on frequency
    .join('');
}
​
// Using Map (and TS) for better performance with large datasets
​
// function duplicateEncode(word: string): string {
//   let lowerCaseWord = word.toLowerCase();
//   let charCount = new Map<string, number>();
​
//   // First pass: Count occurrences
//   for (let char of lowerCaseWord) {
//     charCount.set(char, (charCount.get(char) || 0) + 1);
//   }
​
//   // Second pass: Construct output
//   return [...lowerCaseWord]
//     .map(char => charCount.get(char)! > 1 ? ')' : '(')
//     .join('');
// }
​