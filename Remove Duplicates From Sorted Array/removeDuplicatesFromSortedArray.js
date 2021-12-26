/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  var usedNums = {};
  var index = 0;

  for (var i = 0; i < nums.length; i++) {
    if (!usedNums[nums[i]]) {
      nums[index] = nums[i];
      index += 1;
      usedNums[nums[i]] = 'x';
    }
  }

  return index;
};