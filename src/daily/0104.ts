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

function containsDuplicate(nums: number[]): boolean {
  const set = new Set()
  for (const num of nums) {
    if (set.has(num)) {
      return true
    }
    set.add(num)
  }
  return false
}

// console.log(containsDuplicate([1, 2, 3, 1]))
// console.log(containsDuplicate([1, 2, 3, 4]))
