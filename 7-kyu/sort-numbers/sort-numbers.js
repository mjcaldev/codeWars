function solution(nums) {
  if (!nums || nums.length === 0) {
    return [];
  }
​
  return nums.sort((a, b) => a - b);
}
​
// Here's a more manual version showing Bubble Sort
// function solution(nums) {
//   if (!nums || nums.length === 0) {
//     return [];
//   }
​
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < nums.length - 1; j++) {
//       if (nums[j] > nums[j + 1]) {
//         // Swap
//         let temp = nums[j];
//         nums[j] = nums[j + 1];
//         nums[j + 1] = temp;
//       }
//     }
//   }
​
//   return nums;
// }