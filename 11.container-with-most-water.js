/**
 * leetcode 11: https://leetcode-cn.com/problems/container-with-most-water/
 * 解法1: 双循环暴力解法 O(n2)
 * 解法2: 双指针 O(n)
*/

/**
* @param {number[]} height
* @return {number}
*/
var maxArea = function (height) {
  let max = 0;
  let left = 0, right = height.length - 1;

  while (left < right) {
    const leftHeight = height[left];
    const rightHeight = height[right];

    let minHeight;
    // 左边低，左边往右，右边低，右边往左
    if (leftHeight > rightHeight) {
      minHeight = rightHeight;
      right--;
    } else {
      minHeight = leftHeight;
      left++;
    }

    max = Math.max(max, minHeight * (right - left + 1));
  }
  return max;
};