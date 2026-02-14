export function findNb(m: number): number {
  // From the identity: (n(n+1)/2)^2 = m
  // Let t = n(n+1)/2, then t^2 = m, so t must equal sqrt(m)
  const t = Math.sqrt(m);
​
  // If m is not a perfect square, there is no integer t => no solution
  if (!Number.isInteger(t)) return -1;
​
  // Solve n(n+1)/2 = t => n^2 + n - 2t = 0
  // Discriminant D = 1 + 8t must be a perfect square for n to be an integer
  const D = 1 + 8 * t;
  const sqrtD = Math.sqrt(D);
​
  // If D isn't a perfect square, n won't be an integer
  if (!Number.isInteger(sqrtD)) return -1;
​
  // Positive root only: n = (-1 + sqrt(D)) / 2
  const n = (-1 + sqrtD) / 2;
​
  // Final integer check
  return Number.isInteger(n) ? n : -1;
//Brute Force Version
//   // We'll build the sum 1^3 + 2^3 + ... until we hit or pass m
//   let n = 0;
//   let sum = 0;
​
//   // Keep adding next cube while sum is still below target
//   while (sum < m) {
//     n += 1;
//     sum += n ** 3;
//   }
​
//   // If we hit exactly m, n is the answer; otherwise no solution
//   return sum === m ? n : -1;
}
​