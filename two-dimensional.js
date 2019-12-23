/**
 *
 * 二维数据结构: 二维拓扑结构 (图);
 *
 * 树形结构: (有向无环图)
 *  树形结构有一个根节点, 树形结构没有回路;   树是图的一种;
 *
 * 树的度: 有最多叉的节点的叉的数量就是这棵树的度
 * 树的深度: 树最深有几层, 树的深度就为几;
 * 叶子节点: 下边没有其他节点了;
 * 节点: 既不是根节点, 又不是叶子节点的普通节点;
 */

/**
 *
 * 二叉树:
 *      树的度最多为2;    树最多只有两个叉;
 *
 * 满二叉树:
 *      所有的叶子节点都在最底层, 每个非叶子节点都有两个子节点
 *
 * 完全二叉树:
 *      国内定义:
 *          1.叶子节点都在最后一层或倒数第二层;
 *          2.叶子节点都向左聚拢
 *
 *      国际定义:
 *          1. 叶子节点都在最后一层或倒数第二层;
 *          2. 如果有叶子节点, 就必然有两个叶子节点;
 */

/**
  * 
  * 二叉树遍历;
  * 
  *     前序遍历 (先根次序遍历):
  *         根节点 => 左节点 => 右节点
  *         function preEnum(root) {
                if (root == null) return;
                console.log(root.value);
                preEnum(root.left);
                preEnum(root.right);
            }
  * 
  *     中序遍历 (中根次序遍历):
  *         左节点 => 根节点 => 左节点
  *         function midEnum(root) {
                if (root == null) return;
                midEnum(root.left);
                console.log(root.value);
                midEnum(root.right);
            }
  * 
  *     后序遍历 (后根次序遍历): 
  *         左节点 => 右节点 => 根节点
  *         function nextEnum(root) {
                if (root == null) return;
                nextEnum(root.left);
                nextEnum(root.right);
                console.log(root.value);
            }
  */

/**
   * 
   * 根据前序和中序还原二叉树
   * var pre = ['a', 'c', 'f', 'g', 'b', 'd', 'e'];
   * var mid = ['f', 'c', 'g', 'a', 'd', 'b', 'e'];
   * 
   *    function preMid(preList, midList) {
            if (preList == null || midList == null || preList.length == 0 || midList.length == 0 || preList.length != midList.length) return null;
            var root = new Node(preList[0]);
            var index = midList.indexOf(preList[0]);
            var preLeftList = preList.slice(1, index + 1);
            var preRightList = preList.slice(index + 1, preList.length);
            var midLeftList = midList.slice(0, index);
            var midRightList = midList.slice(index + 1, midList.length);
            root.left = preMid(preLeftList, midLeftList);
            root.right = preMid(preRightList, midRightList);
            return root;
        }
   */

/**
    * 
    * 根据后序和中序还原二叉树
    * var next = ['f', 'g', 'c', 'd', 'e', 'b', 'a']
    * var mid = ['f', 'c', 'g', 'a', 'd', 'b', 'e'];
    * 
    *   function nextMid(nextList, midList) {
            if (nextList == null || midList == null || nextList.length == 0 || midList.length == 0 || midList.length != nextList.length) return null;
            var root = new Node(nextList[nextList.length - 1]);
            var index = midList.indexOf(root.value);
            var nextLeftList = nextList.slice(0, index);
            var nextRightList = nextList.slice(index, nextList.length - 1);
            var midLeftList = midList.slice(0, index);
            var midRightList = midList.slice(index + 1, midList.length);
            root.left = nextMid(nextLeftList, midLeftList);
            root.right = nextMid(nextRightList, midRightList);
            return root;
        }
    */

/**
 *
 * 二叉树的搜索
 *    深度优先搜索: 更适合探索未知;
 * 
 *  function deepSearch(root, target) {
      if (root == null) return false;
      if (root.value == target) return true;
      var left = deepSearch(root.left, target);
      var right = deepSearch(root.right, target);
      return left || right;
    }
 *
 *    广度优先搜索: 更适合搜索局域;
 * 
 *  function breadthSearch(rootList, target) {
      if (rootList == null || rootList.length == 0) return false;
      var nextRootList = [];
      for (var i = 0; i < rootList.length; i++) {
        if (rootList[i] == null) break;
        if (rootList[i].value == target) {
          return true;
        }
        nextRootList.push(rootList[i].left);
        nextRootList.push(rootList[i].right);
      }
      return breadthSearch(nextRootList, target);
    }
 * 
 */

// function

/**
     * 
     * 二叉树的比较
     *      互换位置相等:
     *          function compare(root1, root2) {
                    if (root1 == root2) return true;
                    if (root1 == null && root2 != null || root1 != null && root2 == null) return false;
                    if (root1.value != root2.value) return false;
                    var left = compare(root1.left, root2.left);
                    var right = compare(root1.right, root2.right);
                    return compare(root1.left, root2.left) && compare(root1.right, root2.right);
                }
     */

/**
      * 
      * 二叉树diff算法
      * function diffTree(root1, root2, diffList) {
            if (root1 == root2) return diffList;
            if (root1 == null && root2 != null) {
                diffList.push({
                    type: '新增',
                    origin: null,
                    target: root2
                })
            } else if (root1 != null && root2 == null) {
                diffList.push({
                    type: '删除',
                    origin: root1,
                    target: null
                })
            } else if (root1.value != root2.value) {
                diffList.push({
                    type: '修改',
                    origin: root1,
                    target: root2
                })
                diffTree(root1.left, root2.left, diffList);
                diffTree(root1.right, root2.right, diffList);
            } else {
                diffTree(root1.left, root2.left, diffList);
                diffTree(root1.right, root2.right, diffList);
            }
        }
      */

function breadthSearch(rootList, target) {
  if (rootList == null || rootList.length == 0) return false;
  var nextRootList = [];
  for (var i = 0; i < rootList.length; i++) {
    if (rootList[i] == null) break;
    if (rootList[i].value == target) {
      return true;
    }
    nextRootList.push(rootList[i].left);
    nextRootList.push(rootList[i].right);
  }
  return breadthSearch(nextRootList, target);
}

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
a.left = c;
a.right = b;
b.left = d;
b.right = e;
c.left = f;
c.right = g;

console.log(breadthSearch([a], "a"));
