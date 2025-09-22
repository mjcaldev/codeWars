function firstNonRepeatingLetter(s) {
  // make an array of chars from the string
  const chars = Array.from(s)
  
  // Frequency map
  const freq = {}
  
  // 1 Fill freq map case sensitive
  for (const ch of chars) {
    const key = ch.toLowerCase();
    freq[key] = (freq[key] || 0) + 1;
    // If you prefer the if/else:
    // if (freq[key]) { freq[key] = freq[key] + 1; } else { freq[key] = 1; }
  }
  
  // 2) Find the first char whose lowercase form appears exactly once
  for (const ch of chars) {
    if (freq[ch.toLowerCase()] === 1) return ch; // keep original case
  }
  
  // 3) If none, return empty string
  return "";
}