// https://leetcode.com/problems/count-good-nodes-in-binary-tree/

class TreeNode {
      val: number
      left: TreeNode | null
      right: TreeNode | null
      constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.left = (left===undefined ? null : left)
          this.right = (right===undefined ? null : right)
      }
  }

function goodNodes(root: TreeNode | null): number {
    return isGoodNode(root, -Infinity);
};

function isGoodNode(root: TreeNode | null, maxNodeValue: number): number {
    if (root === null) return 0;

    let goodNode = 0;

    if (root.val >= maxNodeValue) {
        goodNode = 1;
        maxNodeValue = root.val;
    }

    return goodNode
        + isGoodNode(root.left, maxNodeValue)
        + isGoodNode(root.right, maxNodeValue);
}


