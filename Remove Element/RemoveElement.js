/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  var counter = 0;

  for (var i = 0; i < nums.length; i += 1) {
    if (nums[i] === val) {
      nums[i] = undefined;
    }
    else if (nums[i] !== undefined) {
      counter += 1;

      for (var s = 0; s <= i - 1; s += 1) {
        if (nums[s] === undefined) {
          nums[s] = nums[i];
          nums[i] = undefined;
          break;
        }
      }
    }
  }

  return counter;
};