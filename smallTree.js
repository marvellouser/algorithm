/**
 *
 * 图的最小生成树问题:
 *
 * 普利姆算法: (加点法)
 *    1.任选一个点作为起点
 *    2.找到以当前选中点为起点路径最短的边
 *    3.如果这个边的另一端没有被联通进来, 就连接起来
 *    4.如果这个边的另一端早就被连起来, 则看倒数第二短的边
 *    5.重复2-4直到所有的点都联通为止
 *
 * 
 *      function Node(value) {
            this.value = value;
            this.neighbor = [];
        }

        function getIndex(pointSet, value) {
            for (var i = 0; i < pointSet.length; i++) {
                if (pointSet[i].value == value) return i;
            }
            return -1;
        }
        // 根据当前已经有的节点, 来进行判断, 获取到距离最短的点;
        function getMinDisNode(pointSet, distance, nowPointSet) {
            var fromNode = null; //线段起点
            var minDisNode = null; //线段终点;
            var minDis = max;
            // 根据当前已有的这些点为起点, 依次判断连接其他的点的距离是多少
            for (var i = 0; i < nowPointSet.length; i++) {
                var nowPointIndex = getIndex(pointSet, nowPointSet[i].value);
                for (var j = 0; j < distance[nowPointIndex].length; j++) {
                    var thisNode = pointSet[j];
                    if (
                        nowPointSet.indexOf(thisNode) == -1 &&
                        distance[nowPointIndex][j] < minDis
                    ) {
                        fromNode = nowPointSet[i];
                        minDisNode = thisNode;
                        minDis = distance[nowPointIndex][j];
                    }
                }
            }
            fromNode.neighbor.push(minDisNode);
            minDisNode.neighbor.push(fromNode);
            return minDisNode;
            }

            function prim(pointSet, distance, start) {
            //当前连接节点
            var nowPointSet = [];
            nowPointSet.push(start);
            while (true) {
                var minDisNode = getMinDisNode(pointSet, distance, nowPointSet);
                nowPointSet.push(minDisNode);
                if (nowPointSet.length == pointSet.length) break;
            }
        }
 *
 */

/**
 *
 * 克鲁斯卡尔算法:  (加边法)
 *   1.选择最短的边进行连接
 *   2.要保证连接的两端至少有一个点是新的点
 *   3.或者这个边是将两个部落进行连接的
 *   4.重复1-3直到将所有的点都连接到一起
 *
 */

var max = 1000000;
function Node(value) {
  this.value = value;
  this.neighbor = [];
}

var a = new Node("A");
var b = new Node("B");
var c = new Node("C");
var d = new Node("D");
var e = new Node("E");
var pointSet = [a, b, c, d, e];
var distance = [
  [0, 4, 7, max, max],
  [4, 0, 8, 6, max],
  [7, 8, 0, 5, max],
  [max, 6, 5, 0, 7],
  [max, max, max, 7, 0]
];

function kruskal(pointSet, distance) {}

kruskal(pointSet, distance);
