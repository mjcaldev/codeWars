// fundamental loop logic
// function countPositivesSumNegatives(input) {
//   if (!input || input === 0) return [];
//   let posCount = 0;
//   let negSum = 0;
//   for (let i = 0; i < input.length; i++) {
//     if (input[i] > 0) {
//       posCount ++
//     } else {
//       negSum += input[i]
//     }
//   }
//   return [posCount, negSum]
// }
​
// clean use of reduce / JS return array
​
function countPositivesSumNegatives(input) {
  if (!input || input.length === 0) return [];
  return input.reduce(([posCount, negSum], num) => {
    if (num > 0) posCount++
    else if (num < 0) negSum += num
    return [posCount, negSum]
  },
  [0, 0]                     
  );
}
​
​