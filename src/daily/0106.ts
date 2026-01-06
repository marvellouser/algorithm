/**
 * 字母异位词分组  
难度：中等
题目
给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。

字母异位词 是由重新排列源单词的所有字母得到的一个新单词。

可以先做 242. 有效的字母异位词 
简单来说 若字符串 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词

示例：
示例1：
输入：strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
输出：[["bat"],["nat","tan"],["ate","eat","tea"]]
 "ate" "eat" "tea" 是一组字母异味词

示例2：
输入：strs = [""]
输出：[[""]]
特殊情况

示例3：
输入：strs = ["a"]
输出：[["a"]]
特殊情况

提示：
● 1 <= strs.length <= 104
● 0 <= strs[i].length <= 100
● strs[i] 仅包含小写字母
 */
/**
 * 解题思路
 * 创建一个map，键存排序后的字符串，值存字符串列表
 * 遍历数组，给字符串排序，判断map中是否存在排序后的键，如果有，插入当前字符串，如果没有，设置该键，值为该字符串的数组
 * 返回map中所有值
 */

function groupAnagrams(strs: string[]) {
  const strMap = new Map()

  for (const str of strs) {
    const sortStr = str.split('').sort().join('')
    if (strMap.has(sortStr)) {
      strMap.get(sortStr).push(str)
    } else {
      strMap.set(sortStr, [str])
    }
  }

  return [...strMap.values()]
}

// console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']))

/**
 * 最长连续序列
难度：中等
题目
给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。

请你设计并实现时间复杂度为 O(n) 的算法解决此问题。

示例：
输入：nums = [100,4,200,1,3,2]
输出：4
解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。

提示：
● 0 <= nums.length <= 105
● -109 <= nums[i] <= 109
 */

/**
 * 解题思路
 * 先排序去重
 * 遍历数组，给定最大结果值， 当前序列长度值
 * 判断上一个是否是当前值-1， 是的话，当前列长度++   最大结果值和当前列长度比较取更大的
 * 否的话，结果重置为1
 *
 */

function longestConsecutive(nums: number[]): number {
  if (nums.length === 0) return 0
  nums = [...new Set(nums.sort((a, b) => a - b))]
  let num = 1
  let maxNum = 1
  for (let i = 1; i < nums.length; i++) {
    console.log(nums[i], '.........', nums[i - 1])
    if (nums[i] === nums[i - 1] + 1) {
      num++
      maxNum = Math.max(maxNum, num)
    } else {
      num = 1
    }
  }
  return maxNum
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]))
