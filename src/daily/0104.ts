/**
 * 
 * 
 * 存在重复元素 
 * 给你一个整数数组 nums 。如果任一值在数组中出现 至少两次 ，返回 true ；如果数组中每个元素互不相同，返回 false 。
 * 示例：
    示例1：
    输入：nums = [1,2,3,1]
    输出：true


    示例2：
    输入：nums = [1,2,3,4]
    输出：false

    提示：
    ● 1 <= nums.length <= 105
    ● -109 <= nums[i] <= 109
 */

/**
 * 解题思路：
这个问题可以通过多种方式解决，下面是一种使用哈希表（在 JavaScript 中通常用对象或 Map 实现）的解决方案。哈希表允许我们在平均 O(1) 的时间内查找和插入元素，这样我们就能有效地检测数组中是否存在重复的元素。
1. 初始化一个空的哈希表。
2. 遍历数组中的每一个元素。
3. 对于每一个元素，检查它是否已经存在于哈希表中。
  ○ 如果存在，则说明数组中存在重复的元素，返回 true。
  ○ 如果不存在，则将该元素添加到哈希表中。
4. 如果遍历完整个数组都没有发现重复的元素，返回 false。
 */

function containsDuplicate(nums: number[]): boolean {
  const set = new Set();
  for (const num of nums) {
    if (set.has(num)) {
      return true;
    }
    set.add(num);
  }
  return false;
}

// console.log(containsDuplicate([1, 2, 3, 1]))
// console.log(containsDuplicate([1, 2, 3, 4]))
