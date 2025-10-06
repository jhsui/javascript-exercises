// const palindromes = function (string) {
//   for (let i = 0; i < Math.floor(string.length / 2); i++) {
//     if (string.charAt(i) !== string.charAt(string.length - 1 - i)) {
//       return false;
//     }
//   }
//   return true;
// };

function isLetterOrDigits(ch) {
  return /^[a-zA-Z0-9]$/.test(ch);
}
// function isLetter(c) {
//   return c.toLowerCase() != c.toUpperCase();
// }

const palindromes = function (string) {
  const characters = string.split("");
  for (let i = characters.length - 1; i >= 0; i--) {
    if (!isLetterOrDigits(characters[i])) {
      characters.splice(i, 1);
    }
  }

  for (let i = 0; i < characters.length; i++) {
    if (
      characters[i].toLowerCase() !==
      characters[characters.length - 1 - i].toLowerCase()
    ) {
      return false;
    }
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
