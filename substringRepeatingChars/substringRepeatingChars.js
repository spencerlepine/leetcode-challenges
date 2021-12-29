/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (!s) {
    return 0;
  }

  // track the output string
  var longestSequence = "";
  var outputStr = "";

  // track the used letter substring character object
  var usedLetters = {};
  // iterate over characters left to right
  for (var i = 0; i < s.length; i++) {
    var thisChar = s[i];

    if (usedLetters[thisChar]) {
      if (!longestSequence) {
        longestSequence = outputStr;
      } else if (outputStr.length > longestSequence.length) {
        longestSequence = outputStr;
      }

      usedLetters = {};
      outputStr = "";
    }

    usedLetters[thisChar] = 1;
    outputStr += thisChar;
  }

  return longestSequence.length;
};