/**
 * 
 * 冒泡排序
 * function sort(arr) {
        if (arr == null || arr.lenght == 0) return;
        if (arr == null) return;
        for (var i = 0; i < arr.length; i ++) {
            for (var j = 0; j < arr.length - i - 1; j ++) {
                if (arr[j] > arr[j + 1]) {
                    exchange(arr, j, j + 1);
                }
            }
        }
    }
 */

/**
  * 
  * 选择排序
  * 
  * function sort(arr) {
        console.log(222);
        if (arr == null || arr.lenght == 0) return;
        for (var i = 0; i < arr.length - 1; i ++) {
            var tempIndex = i;
            for (var j = i + 1; j < arr.length ; j ++) {
                if (compare(arr[tempIndex], arr[j])) {
                    tempIndex = j;
                }
            }
            exchange(arr, i, tempIndex);
        }
    }
  */

/**
   * 
   * 快速排序 (简单);
   * function quickSort(arr) {
        if (arr == null) return [];
        if (arr.length <= 1) return arr;
        var mid = arr[0];
        var left = [],
            right = [];
        for (var i = 1; i < arr.length; i ++) {
            if (arr[i] < mid) left.push(arr[i])
            else right.push(arr[i]);
        }
        return quickSort(left).concat(mid, quickSort(right));
    }
   */

/**
    * 
    * 快速排序(标准);
    *   function quickSort(arr, begin, end) {
            if (begin >= end - 1) return;
            var left = begin;
            var right = end;
            do {
                do {
                    left ++;
                } while(left < right && arr[left] < arr[begin]);
                do {
                    right --;
                } while(right > left && arr[right] > arr[begin]);
                if (right > left) exchange(arr, left, right);
            } while (left < right);
            var changePoint = left == right ? right - 1 : right;
            exchange(arr, begin, changePoint);
            quickSort(arr, begin, changePoint);
            quickSort(arr, changePoint + 1, end);
        }
    */

function compare(a, b) {
  if (a > b) return true;
  return false;
}

function exchange(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
var arr = [20, 20, 1, 6, 8, 9, 5, 33, 22, 66, 5, 80, 4];
function tempQuickSort(arr, start, end) {
  if (arr == null || arr.length == 0 || start >= end - 1) return;
  var left = start;
  var right = end;
  do {
    do {
      left++;
    } while (left < right && arr[left] < arr[start]);
    do {
      right--;
    } while (left < right && arr[right] > arr[start]);
    if (left < right) exchange(arr, left, right);
  } while (left < right);
  var tempIndex = left == right ? right - 1 : right;
  exchange(arr, start, tempIndex);
  tempQuickSort(arr, start, tempIndex);
  tempQuickSort(arr, tempIndex + 1, end);
}

function quickSort(arr) {
  if (arr == null || arr.length == 0) return;
  // var
  tempQuickSort(arr, 0, arr.length);
}
console.log(arr);
quickSort(arr);
console.log(arr);
