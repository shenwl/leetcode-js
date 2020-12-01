/**
 * @param {number[]} height
 * @return {number}
 * O(n)时间复杂度及空间复杂度解法
 */
var trap = function (height) {
    const n = height.length;
    const left = []; // left[i]表示i左边的最大值
    const right = []; // right[i]表示i右边的最大值

    for (let i = 1; i < n; i++) {
        left[i] = Math.max(left[i - 1] || 0, height[i - 1]);
    }

    for (let i = n - 2; i >= 0; i--) {
        right[i] = Math.max(right[i + 1] || 0, height[i + 1]);
    }

    let water = 0;
    // 计算每个柱子上雨水的数量，累加
    for (let i = 0; i < n; i++) {
        const level = Math.min(left[i] || 0, right[i] || 0);
        water += Math.max(0, level - (height[i] || 0));
    }
    return water;
};