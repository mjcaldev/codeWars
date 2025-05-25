function removeSmallest(numbers) {
  if (numbers.length === 0) return [];
​
  const minIndex = numbers.indexOf(Math.min(...numbers));
  return numbers.slice(0, minIndex).concat(numbers.slice(minIndex + 1));
}