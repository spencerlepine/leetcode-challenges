/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (!needle) {
        return 0;
    }

    var firstLetter = needle[0];

    for (var i = 0; i < haystack.length; i++) {
        if (haystack[i] === firstLetter) {
            for (var c = 0; c < needle.length; c++) {
                if (haystack[i + c] === needle[c]) {
                    if (c === needle.length - 1) {
                        return i;
                    }
                } else {
                    break;
                }
            }
        }
    }

    return -1;
};