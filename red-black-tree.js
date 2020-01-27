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
 * 
  function addNode(root, num) {
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
      addNode(root, arr[i]);
    }
    return root;
  }
 */

/**
  * 
  * 二叉搜索树搜索:
  * function searchByTree(root, target) {
      if (root == null) return false;
      if (root.value == target) return true;
      if (root.value > target) return searchByTree(root.left, target);
      else return searchByTree(root.right, target);
    }
  */

/**
 *
 * 平衡二叉树:
 *     1.根节点的左子树与右子树的高度差不能超过1
 *     2.这颗二叉树的每个子树都符合第一条
 *
 * 判断是否平衡二叉树:
 *
 * 
  function getDeep(root) {
    if (root == null) return 0;
    var leftDeep = getDeep(root.left);
    var rightDeep = getDeep(root.right);
    return Math.max(leftDeep, rightDeep) + 1;
  }

  function isBalance(root) {
    if (root == null) return true;
    var leftDeep = getDeep(root.left);
    var rightDeep = getDeep(root.right);
    if (Math.abs(leftDeep - rightDeep) > 1) {
      return false;
    } else {
      return isBalance(root.left) && isBalance(root.right);
    }
  }
 */

/**
 *
 * 二叉树的单旋操作 (左单旋, 右单旋)
 *    某一节点不平衡
 *      如果左边浅, 右边深, 进行左单旋
 *      如果左边深, 右边浅, 进行右单旋
 *
 *
 *      旋转节点: 不平衡的节点为旋转节点
 *      新根: 旋转之后称为根节点的节点
 *      变化分支: 父节点发生变化的分支
 *      不变分支: 父节点不变的分支
 *
 * 左单旋时:
 *    旋转节点: 当前不平衡的节点
 *    新根: 右子树的根节点
 *    变化分支: 旋转节点的右子树的左子树
 *    不变分支: 旋转节点的右子树的右子树
 *
 *
 * 右单旋时:
 *    旋转节点: 当前不平衡的节点;
 *    新根: 左子树的根节点;
 *    变化分支: 旋转节点的左子树的右子树;
 *    不变分支: 旋转节点的左子树的左子树;
 */

function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

var a = new Node("a");
var b = new Node("b");
var c = new Node("c");
var d = new Node("d");
var e = new Node("e");
var f = new Node("f");
var g = new Node("g");
var h = new Node("h");
var j = new Node("j");
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;
d.right = h;
e.right = j;

function getDeep(root) {
  if (root == null) return 0;
  var leftDeep = getDeep(root.left);
  var rightDeep = getDeep(root.right);
  return Math.max(leftDeep, rightDeep) + 1;
}

function isBalance(root) {
  if (root == null) return true;
  var leftDeep = getDeep(root.left);
  var rightDeep = getDeep(root.right);
  if (Math.abs(leftDeep - rightDeep) > 1) {
    return false;
  } else {
    return isBalance(root.left) && isBalance(root.right);
  }
}

console.log(isBalance(b));
