/**
 * 括号生成
难度：中等

题目
数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
示例：
示例1：
输入：n = 3
输出：["((()))","(()())","(())()","()(())","()()()"]


示例2：
输入：n = 1
输出：["()"]

提示：
● 1 <= n <= 8
 */

/**
 * 解题思路
 * 通过一个递归函数
 * 参数为当前字符串，左括号数量，右括号数量
 * 当左括号数量和右括号数量都等于n时，将当前字符串加入结果数组
 * 由于括号右先后顺序，所以右括号数量得小于左括号数量
 */

function generateParenthesis(n: number): string[] {
  const res: string[] = []

  const dfs = (str: string, left: number = 0, right: number = 0) => {
    if (left === n && right === n) {
      res.push(str)
      return
    }
    if (left < n) {
      dfs(`${str}(`, left + 1, right)
    }
    if (right < left) {
      dfs(`${str})`, left, right + 1)
    }
  }

  dfs('', 0, 0)

  return res
}

// console.log(generateParenthesis(3))

/**
 * 每日温度
难度：中等

题目
给定一个整数数组 temperatures ，表示每天的温度，返回一个数组 answer ，其中 answer[i] 是指对于第 i 天，下一个更高温度出现在几天后。如果气温在这之后都不会升高，请在该位置用 0 来代替。
示例：
示例1：
输入：temperatures = [73,74,75,71,69,72,76,73]
输出：[1,1,4,2,1,1,0,0]


示例2：
输入：temperatures = [30,40,50,60]
输出：[1,1,1,0]

提示：
● 1 <= temperatures.length <= 105
● 30 <= temperatures[i] <= 100
 */

function dailyTemperatures(temperatures: number[]): number[] {
  const res = new Array(temperatures.length).fill(0)
  const stack: number[] = []
  for (let i = 0; i < temperatures.length; i++) {
    while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
      const index = stack.pop()!
      res[index] = i - index
    }
    stack.push(i)
  }
  return res
}

// console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]))
// console.log(dailyTemperatures([30, 40, 50, 60]))
