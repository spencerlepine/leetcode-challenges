/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var longestPal;

    for (var i = 0; i < s.length; i += 1) {
        var possiblePal = "";

        for (var c = i ; c < s.length; c += 1) {
            possiblePal += s[c];

            if (isPalindrome(possiblePal)) {
                if (longestPal === undefined || possiblePal.length > longestPal.length) {
                    longestPal = possiblePal;
                }
            }
        }
    }

    return longestPal || s;
};

var isPalindrome = function(s) {
    for (var i = 0; i <= Math.floor(s.length / 2); i++) {
        if (s[i] !== s[(s.length - 1) - i]) {
            return false
        }
    }

    return true
};