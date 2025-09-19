function topThreeWords(text) {
  
  // Match words with letters and apostrophes (e.g., "it's", "'abc", "abc'")
  const words = text.toLowerCase().match(/[a-z]+'?[a-z']*/g);
​
  if (!words) return [];
​
  // Count occurrences
  const counts = {};
  for (const word of words) {
    
    // Exclude strings that are just apostrophes
    if (/^'+$/.test(word)) continue;
    counts[word] = (counts[word] || 0) + 1;
  }
​
  // Sort by frequency, then alphabetically (arbitrary tie-breaker allowed)
  return Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(entry => entry[0]);
}