// 循环替换法
var rotate = function (nums, k) {
  if (nums.length < 2) return;

  k = Math.floor(k % nums.length);
  let count = 0;
  for (let start = 0; count < nums.length; start++) {
    let cur = start;

    do {
      const next = Math.floor((cur + k) % nums.length);
      const temp = nums[next];
      nums[next] = nums[start];
      nums[start] = temp;
      cur = next;
      count++;
    } while (start !== cur);
  }
};