/**
 * 两数之和 II - 输入有序数组
难度：中等

题目
给你一个下标从 1 开始的整数数组 numbers ，该数组已按 非递减顺序排列  ，请你从数组中找出满足相加之和等于目标数 target 的两个数。如果设这两个数分别是 numbers[index1] 和 numbers[index2] ，则 1 <= index1 < index2 <= numbers.length 。
以长度为 2 的整数数组 [index1, index2] 的形式返回这两个整数的下标 index1 和 index2。
你可以假设每个输入 只对应唯一的答案 ，而且你 不可以 重复使用相同的元素。
你所设计的解决方案必须只使用常量级的额外空间。
示例：
示例1：
输入：numbers = [2,7,11,15], target = 9
输出：[1,2]
2 与 7 之和等于目标数 9 。因此 index1 = 1, index2 = 2 。返回 [1, 2] 。

示例2：
输入：numbers = [2,3,4], target = 6
输出：[1,3]
2 与 4 之和等于目标数 6 。因此 index1 = 1, index2 = 3 。返回 [1, 3] 。

提示：
● 2 <= numbers.length <= 3 * 104
● -1000 <= numbers[i] <= 1000
● numbers 按 非递减顺序 排列
● -1000 <= target <= 1000
● 仅存在一个有效答案
 */

/**
 * 解题思路
 * 数组有序，采用双指针
 * 开头结尾两个指针，相加等于目标数，返回下标
 * 相加大于目标数，结尾指针左移
 * 相加小于目标数，开头指针右移
 */
function twoSum(numbers: number[], target: number) {
  let left = 0;
  let right = numbers.length - 1;
  while (left < right) {
    const sum = numbers[left] + numbers[right];
    if (sum === target) {
      return [left + 1, right + 1];
    } else if (sum > target) {
      right--;
    } else {
      left++;
    }
  }
}
// console.log(twoSum([2, 7, 11, 15], 9));
// console.log(twoSum([2, 3, 4], 6));

/**
 * 盛最多水的容器
难度：中等

题目
给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。
找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
返回容器可以储存的最大水量。
说明：你不能倾斜容器。
示例：
示例1：

输入：[1,8,6,2,5,4,8,3,7]
输出：49


示例2：
输入：height = [1,1]
输出：1

提示：
● n == height.length
● 2 <= n <= 105
● 0 <= height[i] <= 104
 */

/**
 * 解题思路
 * 双指针，开头结尾两个指针，计算面积，取最大面积
 * 面积 = 短的高度 * 距离
 * 移动高度更短的指针
 */
function maxArea(height: number[]): number {
  let left = 0,
    right = height.length - 1,
    max = 0;
  while (left < right) {
    const area = Math.min(height[left], height[right]) * (right - left);
    max = Math.max(max, area);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return max;
}
// console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
// console.log(maxArea([1, 1]));
