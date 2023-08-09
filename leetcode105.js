// Construct Binary Tree From Preorder And Inorder Traversal
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (preorder.length === 0 || inorder.length === 0) {
    return null;
  }

  let rootVal = preorder.shift();
  let mid = inorder.indexOf(rootVal);

  let rootNode = new TreeNode(rootVal);

  rootNode.left = buildTree(preorder, inorder.slice(0, mid));
  rootNode.right = buildTree(preorder, inorder.slice(mid + 1));

  return rootNode;
};
