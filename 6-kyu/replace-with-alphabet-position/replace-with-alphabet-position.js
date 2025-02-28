function alphabetPosition(text) {
  let alphaNum = [];
  
  for (let i = 0; i < text.length; i++) {
    let char = text[i].toLowerCase();
    // rejects non-alphabet
    if(char >= 'a' && char <= 'z') {
      // charCode minus 'a'.charCode + 1
      let numValue = char.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
      alphaNum.push(numValue);
    }
  }
  return alphaNum.join(' ');
}