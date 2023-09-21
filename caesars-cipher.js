function rot13(str) {
const alphabetArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
   const newStr = str.split("");
    let result = ''
  for (let i = 0; i < newStr.length; i++) {
    const char = newStr[i]
    let charIndex = alphabetArr.indexOf(newStr[i]) + 13
     if (charIndex >= alphabetArr.length) {
      charIndex -= 26;
     }
    if (alphabetArr.includes(newStr[i])) {
     result += (alphabetArr[charIndex])
    }
    else if (char !== /\w/){ 
      result += char
    } 
}
   
  return result;
}
