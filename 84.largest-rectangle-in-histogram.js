/**
 * leetcode 84 hard: https://leetcode-cn.com/problems/largest-rectangle-in-histogram/
 * 1. 暴力解法 O(n2)，遍历每个元素，对每个元素找左右边界（边界的下一个元素小于自己）
 * 2. stack解法，也是用左右边界
*/

/**
 * @param {number[]} heights
 * @return {number}
 * 单调栈解法
 */
var largestRectangleArea = function (heights) {
  if (heights.length <= 1) return heights[0] || 0;

  const stack = []; // height[]
  let largest = -Infinity;

  const getArea = () => {
    let minHeight = -Infinity;
    let width = 0;
    while (stack[stack.length - 1][1] > -1) {
      minHeight = Math.min(stack.pop()[1], minHeight);
      width++;
    }
    return minHeight * width;
  }

  for (let i = 0; i < heights.length; i++) {
    if (heights[i] < stack[stack.length - 1][1]) {
      largest = Math.max(largest, getArea());
    }
    stack.push([i, heights[i]]);
  }

  return largest;
};

/**
 * @param {number[]} heights
 * @return {number}
 * 暴力解法
 */
var largestRectangleArea2 = function (heights) {
  if (heights.length <= 1) return heights[0] || 0;
  let largest = -Infinity;

  const getArea = (point) => {
    let left = point;
    let right = point;
    let min = heights[point];

    for (let i = point; i < heights.length; i++) {
      right = i;
      min = Math.min(min, heights[i]);
      if (i < heights.length - 1 && heights[i + 1] < heights[point]) {
        break;
      }
    }
    for (let i = point; i >= 0; i--) {
      left = i;
      min = Math.min(min, heights[i]);
      if (i > 0 && heights[i - 1] < heights[point]) {
        break;
      }
    }
    return (right - left + 1) * min;
  }

  for (let i = 0; i < heights.length; i++) {
    largest = Math.max(largest, getArea(i));
  }
  return largest;
};

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]))
console.log(largestRectangleArea([9, 0]))