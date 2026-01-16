/**
 * 移动零
难度：简单
题目
给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
请注意 ，必须在不复制数组的情况下原地对数组进行操作。
示例：
示例1：
输入：nums = [0,1,0,3,12]
输出：[1,3,12,0,0]


示例2：
输入：nums = [0]
输出：[0]

提示：
● 1 <= nums.length <= 104
● -231 <= nums[i] <= 231 - 1
 */

/**
 * 解题思路
 * 双指针
 * 左指针指向当前非零元素的位置
 * 右指针遍历数组
 * 当右指针指向非零元素时，交换左右指针的元素，左指针右移
 */
function moveZeroes(nums: number[]) {
  let left = 0;
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] !== 0) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
    }
  }
}
// const nums = [0, 1, 0, 3, 12];
// moveZeroes(nums);
// console.log(nums);

/**
 * 验证回文串 
难度：简单
题目
如果在将所有大写字符转换为小写字符、并移除所有非字母数字字符之后，短语正着读和反着读都一样。则可以认为该短语是一个 回文串 。

字母和数字都属于字母数字字符。

给你一个字符串 s，如果它是 回文串 ，返回 true ；否则，返回 false 。

示例：
示例1：
输入: s = "A man, a plan, a canal: Panama"
输出：true
解释："amanaplanacanalpanama" 是回文串。

示例 2：
输入：s = " "  
输出：true
解释：在移除非字母数字字符之后，s 是一个空字符串 "" 。
由于空字符串正着反着读都一样，所以是回文串。
提示：
● 1 <= s.length <= 2 * 105
● s 仅由可打印的 ASCII 字符组成
 */

/**
 * 解题思路
 * 先将字符串转换为小写字母，再移除所有非字母数字字符
 * 翻转字符串判断是否相等
 *
 * 也可以通过双指针，开口结尾判断是否相等(效率更高)
 */

function isPalindrome(s: string) {
  s = s.replace(/[^0-9a-zA-Z]/g, '').toLowerCase();

  // 解法1
  //   const reversed = s.split('').reverse().join('');
  //   return s === reversed;

  // 解法2
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
const s = 'A man, a plan, a canal: Panama';
// console.log(isPalindrome(s));
