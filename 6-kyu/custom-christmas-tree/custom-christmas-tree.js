function customChristmasTree(chars, n) {
  let result = [];
  let index = 0;
​
  // Build leaves
  for (let i = 0; i < n; i++) {
    let rowChars = [];
    for (let j = 0; j <= i; j++) {
      rowChars.push(chars[index % chars.length]);
      index++;
    }
​
    // join with spaces
    let row = rowChars.join(' ');
    // left padding
    let padding = ' '.repeat(n - i - 1);
    result.push(padding + row);
  }
​
  // Trunk height formula
  let trunkHeight = Math.floor((n - 3) / 3) + 1;
  let trunk = ' '.repeat(n - 1) + '|';
  for (let t = 0; t < trunkHeight; t++) {
    result.push(trunk);
  }
​
  return result.join('\n');
}
​