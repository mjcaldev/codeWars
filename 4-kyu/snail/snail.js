// explicit display of four moving pointers
snail = function(array) {
  const result = [];
  if (array.length === 0 || array[0].length === 0) return result;
​
  let top = 0;
  let bottom = array.length - 1;
  let left = 0;
  let right = array[0].length - 1;
​
  while (top <= bottom && left <= right) {
    // Traverse top row
    for (let i = left; i <= right; i++) result.push(array[top][i]);
    top++;
​
    // Traverse right column
    for (let i = top; i <= bottom; i++) result.push(array[i][right]);
    right--;
​
    if (top <= bottom) {
      // Traverse bottom row
      for (let i = right; i >= left; i--) result.push(array[bottom][i]);
      bottom--;
    }
​
    if (left <= right) {
      // Traverse left column
      for (let i = bottom; i >= top; i--) result.push(array[i][left]);
      left++;
    }
  }
​
  return result;
}
​
// More succinct version using reverse
// snail = function(array) {
//   const result = [];
//   while (array.length) {
//     // Take the first row
//     result.push(...array.shift());
​
//     // Rotate the rest counter-clockwise
//     array = array[0] 
//       ? array[0].map((_, i) => array.map(row => row[i])).reverse()
//       : [];
//   }
//   return result;
// }
​