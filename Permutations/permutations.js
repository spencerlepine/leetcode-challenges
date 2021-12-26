/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  var output = [];
  var usedPrefixes = {};

  var extendPerm = function (perms, remaining) {
    for (var i = 0; i < remaining.length; i++) {
      var n = remaining[i];

      var newList = remaining.slice();
      var prefixElem = newList.splice(i, 1)[0];

      var thesePerms = [];

      perms.forEach((perm) => {
        var newPerm = perm.concat(prefixElem);
        if (newPerm.length === nums.length && !usedPrefixes[JSON.stringify(newPerm)]) {
          usedPrefixes[JSON.stringify(newPerm)] = 'x';
          output.push(newPerm)
        }

        thesePerms.push(newPerm);
      });

      extendPerm(thesePerms, newList);
    }
  };

  // Start a permutation at each element in the list
  var permArr = [];
  for (var i = 0; i < nums.length; i++) {
    permArr.push([]);
  }

  extendPerm(permArr, nums);

  return output
};

// PERMUTATE STRINGS
// var permute = function(letters) {
//     var output = [];

//     var printPermutation = function(list, prefix) {
//         list.forEach((n, index) => {
//             if ((prefix + n).length === letters.length) {
//                 output.push((prefix + n));
//             } else {
//                 var newList = list.slice();
//                 newList.splice(index, 1);

//                 printPermutation(newList, prefix + n);
//             }
//         });
//     }

//     // Start a permutation at each element in the list
//     for (var i = 0; i < letters.length; i++) {
//         var newList = letters.slice();
//         newList.splice(i, 1)

//         printPermutation(newList, "" + letters[i]);
//     }

//     return output
// };