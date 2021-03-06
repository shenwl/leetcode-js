/**
 * @param {number} n
 * @return {string[]}
 * 动态规划解法
 * dp[i]表示i组括号的所有有效组合
 * dp[i] = "(dp[p]的所有有效组合)+【dp[q]的组合】"，其中 1 + p + q = i , p从0遍历到i-1, q则相应从i-1到0
 */
var generateParenthesis = function (n) {
  if (n < 1) return [];

  const total = [[null], ["()"]]; // n为0组和1组情况先记录

  for (let i = 2; i <= n; i++) {
    const list = [];
    for (let j = 0; j < i; j++) {
      const nowList1 = total[j];
      const nowList2 = total[i - 1 - j];

      nowList1.forEach(k1 => {
        nowList2.forEach(k2 => list.push(`(${k1 || ''})${k2 || ''}`));
      });
    }
    total.push(list);
  }

  return total[n];
};

/**
 * @param {number} n
 * @return {string[]}
 * 回溯法
 */
var generateParenthesis = function (n) {
  if (n < 1) return [];
  const ans = [];

  const backtrace = (s, left, right) => {
    if (s.length === 2 * n) {
      return ans.push(s.join(''));
    }
    if (left < n) {
      s.push('(')
      backtrace(s, left + 1, right);
      s.pop();
    }
    if (right < left) {
      s.push(')');
      backtrace(s, left, right + 1);
      s.pop();
    }
  }
  backtrace([], 0, 0);
  return ans;
};

/**
 * @param {number} n
 * @return {string[]}
 * 普通递归解法
 */
var generateParenthesis = function (n) {
  if (n < 1) return [];

  const ans = [];

  const _gen = (left, right, n, curStr) => {
      if (left === n && right === n) {
          ans.push(curStr)
          return;
      };
      // 左括号随时可以加，只要不用完，右括号只能数量小于左括号时才能加
      if (left < n) {
          _gen(left + 1, right, n, curStr + '(');
      }
      if (left > right) {
          _gen(left, right + 1, n, curStr + ')');
      }
  }

  // 有2n个格子，放(，)
  _gen(0, 0, n, "");
  return ans;
};