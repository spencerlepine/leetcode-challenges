var threeSumClosest = function (nums, target) {
  let closestSum = 999;

  // Compare every possible sum triplet
  for (let a = 0; a <= nums.length - 3; a++) {
    for (let b = a + 1; b <= nums.length - 2; b++) {
      for (let c = b + 1; c <= nums.length - 1; c++) {
        const thisSum = nums[a] + nums[b] + nums[c];

        if (thisSum === target) {
          return thisSum
        } else if (closerSum(target, thisSum, closestSum)) {
          closestSum = thisSum;
        }
      }
    }
  }

  return closestSum;
};


var closerSum = function (target, thisSum, closestSum) {
  var thisDistance = Math.abs(thisSum - target);
  var closestDistance = Math.abs(closestSum - target);
  return thisDistance - closestDistance < 0;
};


// Runtime: 88 ms
// Memory Usage: 39 MB