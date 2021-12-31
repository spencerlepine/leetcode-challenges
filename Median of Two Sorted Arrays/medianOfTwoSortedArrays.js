/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  var mergedArr = [];
  var list1Index = 0;
  var list2Index = 0;

  while (nums1[list1Index] !== undefined || nums2[list2Index] !== undefined) {
    if (nums2[list2Index] === undefined || nums1[list1Index] <= nums2[list2Index]) {
      mergedArr.push(nums1[list1Index])
      list1Index += 1;
    } else if (nums1[list1Index] === undefined || nums2[list2Index] <= nums1[list1Index]) {
      mergedArr.push(nums2[list2Index])
      list2Index += 1;
    }
  }

  if (mergedArr.length % 2 !== 0) {
    return mergedArr[(mergedArr.length - 1) / 2];
  } else {
    var index = mergedArr.length / 2;
    return (mergedArr[index] + mergedArr[index - 1]) / 2;
  }
};
