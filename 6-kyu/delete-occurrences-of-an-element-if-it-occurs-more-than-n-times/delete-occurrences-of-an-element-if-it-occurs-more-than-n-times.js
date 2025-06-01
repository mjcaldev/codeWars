function deleteNth(arr, n) {
  const result = [];
  const counts = {};
​
  for (let num of arr) {
    if (!counts[num]) counts[num] = 0;
    
    if (counts[num] < n) {
      result.push(num);
      counts[num]++;
    }
  }
​
  return result;
}