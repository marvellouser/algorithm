/**
 * 有效的字母异位词
 * 难度：简单
题目
给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。
示例：
示例1：
输入：s = "anagram", t = "nagaram"
输出：true

示例2：
输入：s = "rat", t = "car"
输出：false
提示：
● 1 <= s.length, t.length <= 5 * 104
● s 和 t 仅包含小写字母
 */

/**个人思路
 * 先判断是否长度相等
 * 创建单个字母映射表, 遍历第一个字符串, 统计每个字母出现次数
 * 遍历第二个字符串, 发现字母不在映射表, 返回false, 发现字母在映射表, 次数减一
 * 得到最终结果
 */

function isAnagram(s: string, t: string) {
  if (s.length !== t.length) return false
  const map = new Map()
  for (const char of s) {
    map.set(char, (map.get(char) || 0) + 1)
  }

  for (const tChar of t) {
    const count = map.get(tChar)
    if (!count || count <= 0) return false
    map.set(tChar, count - 1)
  }
  return true
}

// console.log(isAnagram('anagram', 'nagaram'))
// console.log(isAnagram('rat', 'car'))

/**
 * 两数之和 
 * 难度：简单
题目
给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
你可以按任意顺序返回答案。

示例：
输入：nums = [2,7,11,15], target = 9
输出：[0,1]
因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 

提示：
● 2 <= nums.length <= 104
● -109 <= nums[i] <= 109
● -109 <= target <= 109
● 只会存在一个有效答案
 */

/**个人思路
 * 创建一个数值映射表, 键为数值, 值为索引
 * 遍历数组, 查看target - 当前数值 是否在映射表中
 * 不存在将当前市值和索引存入映射表
 */

function twoSum(nums: number[], target: number) {
  const map: Record<number, number> = {}
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    const diff = target - num
    if (map[diff] !== undefined) {
      return [map[diff], i]
    }
    map[num] = i
  }
  return []
}

// console.log(twoSum([2, 7, 11, 15], 9))
