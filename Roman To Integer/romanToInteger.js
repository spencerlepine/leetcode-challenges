/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var romans = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    };

    var indexToSkip = {};
    var outputSum = 0;

    for (var i = 0; i < s.length; i++) {
        if (indexToSkip[i] === undefined) {
            // if NEXT letter is a "higher" precedence
            if (romans[s[i + 1]] > romans[s[i]]) {
                indexToSkip[i + 1] = '_';
                outputSum += romans[s[i + 1]] - romans[s[i]];
            } else {
                outputSum += romans[s[i]];
            }
        }
    }

    return outputSum;
};