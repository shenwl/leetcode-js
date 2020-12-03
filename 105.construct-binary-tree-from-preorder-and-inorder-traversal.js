/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  // preorder: root leftSubTree rightSubTree
  // inorder: leftSubTree root rightSubTree

  const ans = new TreeNode();

  const inOrderValueToIndex = {};

  inorder.forEach((item, index) => {
    inOrderValueToIndex[item] = index;
  })

  function _buildTree(preLeft, inLeft, preRight, inRight) {
    if ((preLeft > preRight) || (inLeft > inRight)) {
      return null;
    }
    const rootValue = preorder[preLeft];
    const root = new TreeNode(rootValue);

    const pIndex = inOrderValueToIndex[rootValue];

    const lengthLeft = pIndex - 1 - inLeft + 1;
    const newPreLeft = preLeft + 1;

    // 左子树
    root.left = _buildTree(newPreLeft, inLeft, newPreLeft + lengthLeft - 1, pIndex - 1);
    // 右子树
    root.right = _buildTree(newPreLeft + lengthLeft, pIndex + 1, preRight, inRight);
    return root;
  }

  return _buildTree(0, 0, preorder.length - 1, inorder.length - 1);
};