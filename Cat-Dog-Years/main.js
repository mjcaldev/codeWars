var humanYearsCatYearsDogYears = function(humanYears) {
  let catYears = 0;
  let dogYears = 0;
  
  for(let i = 1; i <= humanYears; i++) {
    if (i === 1) {
      catYears += 15;
      dogYears += 15;
    } else if (i === 2) {
      catYears += 9;
      dogYears += 9;
    } else {
      catYears += 4;
      dogYears += 5;
    }
  }
  return [humanYears, catYears, dogYears];
}

// 1a. 
// const humanYearsCatYearsDogYears = humanYears => [
//   humanYears,
//   ( humanYears - 1 ? 16 : 11 ) + 4 * humanYears,
//   ( humanYears - 1 ? 14 : 10 ) + 5 * humanYears,
// ];

// Potential Approaches
// 1. for loop with if/else (above. Despite if/else, least overhead and best performance) = Time 0(n), Space 0(1);
// 1a. arrow function implicit return of an array using ternary (above under)
// 2. Array.from
// 3. Array constructor and map over keys
// 4. Recursion using if/else if/else
// 5. Reduce to generate and sequence in one step