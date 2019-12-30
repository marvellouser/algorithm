/**
 *
 * 二叉搜索树  (二叉排序树):
 *
 *      左子树的节点都比当前节点小, 右子树的节点都比当前节点大
 */

/**
 *
 * 构建二叉搜索树:
 *
 */

function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function addNode(root, num, text) {
  console.log(num, text);
  if (root == null || root.value == num) return;
  if (root.value < num) {
    if (root.right == null) {
      root.right = new Node(num);
    } else {
      addNode(root.right, num);
    }
  } else {
    if (root.left == null) {
      root.left = new Node(num);
    } else {
      addNode(root.left, num);
    }
  }
}

function buildSearchTree(arr) {
  if (arr == null || arr.length == 0) {
    return null;
  }
  var root = new Node(arr[0]);
  for (var i = 1; i < arr.length; i++) {
    addNode(root, arr[i], "aaaa");
  }
  return root;
}

var tree = buildSearchTree([5, 3, 9, 6, 7, 10]);
console.log(tree);
