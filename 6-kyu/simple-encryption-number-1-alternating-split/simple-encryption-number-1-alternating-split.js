    let evenChars = encryptedText.slice(mid);
    let result = '';
​
    for (let j = 0; j < encryptedText.length; j++) {
      if (j % 2 === 0) {
        result += evenChars[j / 2];
      } else {
        result += oddChars[Math.floor(j / 2)];
      }
    }
​
    encryptedText = result;
  }
​
  return encryptedText;
}
​
// My process!
// Encryption
// 1. If the input string is empty or n <= 0, return the original string unchanged.
// 2. Repeat the following steps n times:
//  a. Initialize two empty strings: oddChars and evenChars.
//  b. Loop through each character in the string:
//    aa. If the index is odd, append the character to oddChars.
//    bb. If the index is even, append the character to evenChars.
//  c. Concatenate oddChars followed by evenChars to form the new string.
// 3. After n iterations, return the final string.
​
// Decryption
// 4. If the encrypted string is empty or n <= 0, return the encrypted string unchanged.
// 5. Repeat the following steps n times:
//  a. Split the encrypted string into two parts:
//    aa. oddChars = first floor(length / 2) characters.
//    bb. evenChars = remaining characters.
//  b. Initialize an empty result string.
//  c. Loop through each index i of the original string length:
//    aa. If i is even, append the next character from evenChars.
//    bb. If i is odd, append the next character from oddChars.
//  d. Update the string with the newly formed result.
// 6. After n iterations, return the final decrypted string.
​
​