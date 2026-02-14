export function longestConsec(strarr: string[], k: number): string {
  const n = strarr.length;
​
  // Edge cases
  if (n === 0 || k > n || k <= 0) return "";
​
  let maxLength = 0;
  let longest = "";
​
  // Only iterate where a full window of k exists
  for (let i = 0; i <= n - k; i++) {
    let current = "";
​
    // Build the concatenation of k consecutive strings
    for (let j = 0; j < k; j++) {
      current += strarr[i + j];
    }
​
    // Update if strictly longer (first longest wins)
    if (current.length > maxLength) {
      maxLength = current.length;
      longest = current;
    }
  }
​
  return longest;
  
  // Using JS methods slice and join
//   export function longestConsec(strarr: string[], k: number): string {
//   const n = strarr.length;
​
//   if (n === 0 || k > n || k <= 0) return "";
​
//   let maxLength = 0;
//   let longest = "";
​
//   for (let i = 0; i <= n - k; i++) {
//     const current = strarr.slice(i, i + k).join("");
​
//     if (current.length > maxLength) {
//       maxLength = current.length;
//       longest = current;
//     }
//   }
​
//   return longest;
}