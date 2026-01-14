/**
 * 有效的括号
难度：简单
题目
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
每个右括号都有一个对应的相同类型的左括号。

示例:
示例1
输入：s = "()[]{}"
输出：true
解释："(" "[" "{" 都有对应的右括号匹配

示例2
输入：s = "(]"
输出："("没有右括号")"匹配

提示:
● 1 <= s.length <= 104
● s 仅由括号 '()[]{}' 组成
 */

/**
 * 解题思路
 * 创建一个map, 对应左右括号
 * 创建一个栈结构, 遇到左括号, 插入栈中
 * 遇到右括号, 弹出栈顶元素, 判断匹配
 * 最终判断栈是否为空
 *
 */

function isValid(s: string) {
  const stack: string[] = [];
  const map = new Map([
    ['(', ')'],
    ['[', ']'],
    ['{', '}'],
  ]);
  for (const char of s) {
    if (map.has(char)) {
      stack.push(char);
    } else {
      const left = stack.pop();
      if (!left) {
        return false;
      }
      if (map.get(left) !== char) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

// console.log(isValid('()[]{}'))
// console.log(isValid('(]'))

/**
 * 逆波兰表达式求值
难度：中等
题目
给你一个字符串数组 tokens ，表示一个根据 逆波兰表示法 表示的算术表达式。

请你计算该表达式。返回一个表示表达式值的整数。

注意：
有效的算符为 '+'、'-'、'*' 和 '/' 。
每个操作数（运算对象）都可以是一个整数或者另一个表达式。
两个整数之间的除法总是 向零截断 。
表达式中不含除零运算。
输入是一个根据逆波兰表示法表示的算术表达式。
答案及所有中间计算结果可以用 32 位 整数表示。


示例:
输入：tokens = ["2","1","+","3","*"]
输出：9
解释：该算式转化为常见的中缀算术表达式为：((2 + 1) * 3) = 9

提示:
● 1 <= tokens.length <= 104
● tokens[i] 是一个算符（"+"、"-"、"*" 或 "/"），或是在范围 [-200, 200] 内的一个整数

逆波兰表达式
逆波兰表达式，又称为后缀表达式。在计算机科学和编程领域有着广泛的应用。它与传统的中缀表达式（即我们日常书写的数学表达式形式，如a + b * c）不同，逆波兰表达式将运算符放在操作数之后，消除了运算符的优先级和括号所带来的复杂性，使得表达式的解析更为简单和直接。
在逆波兰表达式中，操作数直接出现，而运算符紧随其后。例如，中缀表达式( a + b ) * c转换为逆波兰表达式就是a b + c *。这样，计算时可以直接从左到右扫描，遇到操作数就入栈，遇到运算符就取出栈顶的两个操作数进行运算，并将结果压回栈中。这种方式非常适合计算机处理，因为它简化了表达式的解析算法，不需要复杂的运算符优先级判断和括号匹配逻辑。

应用:
1.编译原理
在编译器设计中，编译器的词法分析和语法分析阶段会将源代码中的表达式转换为逆波兰表达式或类似的抽象语法树等形式，便于后续的代码生成和优化。
2.计算器程序
许多计算器程序内部使用逆波兰表达式来处理用户输入的数学表达式，因为它简化了计算逻辑，减少了错误的可能性。
3.脚本语言和表达式引擎
在脚本语言、公式处理器（如Excel的公式计算）、数据库查询语言（如SQL中的WHERE子句）中，逆波兰表达式或其变体被用于快速解析和执行复杂的条件表达式和计算任务。
 */

/**
 * 解题思路
 * 创建一个栈结构, 存放可运行的操作数
 * 遍历tokens, 遇到数字, 直接压入栈中
 * 遇到运算符, 弹出栈中两个数字, 进行运算, 运算完结果压入栈中
 * 最终栈中剩下的唯一元素即为表达式的结果
 *
 */

function evalRPN(tokens: string[]): number {
  let stack: number[] = [];

  // 遍历给定的逆波兰表达式tokens
  for (let token of tokens) {
    if (isNaN(Number(token))) {
      const num1 = stack.pop();
      const num2 = stack.pop();
      if (num1 === undefined || num2 === undefined) {
        throw new Error('Invalid expression');
      }
      switch (token) {
        case '+':
          stack.push(num2 + num1);
          break;
        case '-':
          stack.push(num2 - num1);
          break;
        case '*':
          stack.push(num2 * num1);
          break;
        case '/':
          stack.push(Math.trunc(num2 / num1));
          break;
        default:
          throw new Error('Invalid expression');
      }
    } else {
      stack.push(Number(token));
    }
  }
  // 最终栈中剩下的唯一元素即为表达式的结果
  return stack.pop()!;
}

// console.log(evalRPN(['2', '1', '+', '3', '*']))

// console.log(evalRPN(['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+']))
