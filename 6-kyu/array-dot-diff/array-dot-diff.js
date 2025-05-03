// Using Set and .has for most efficient
function arrayDiff(a, b) {
  const bSet = new Set(b);
  return a.filter(num => !bSet.has(num));
}
​
// // Fun JS filter one-liner lol
// const arrayDiff = (a, b) => a.filter(num => !b.includes(num));
​
// Traditional Solution
// function arrayDiff(a, b) {
//   let result = [];
//   for (let num of a) {
//     if(!b.includes(num)) {
//       result.push(num);
//     }
//   }
//   return result
// }