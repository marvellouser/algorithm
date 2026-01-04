module.exports = {
  printWidth: 120, // 超过最大值换行
  tabWidth: 2, // 缩进字节数
  useTabs: false, // 使用制表符而不是空格缩进行
  semi: false, // 结尾不用分号(true有，false没有)
  singleQuote: true, // 使用单引号(true单双引号，false双引号)
  bracketSpacing: true, // 在对象，数组括号与文字之间加空格 "{ foo: bar }"
  trailingComma: "all", // 多行时尽可能打印尾随逗号。（例如，单行数组永远不会出现逗号结尾。） 可选值"<none|es5|all>"，默认all
  jsxSingleQuote: false, // 在JSX中使用双引号
  arrowParens: "always", // (x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号 ,always：不省略括号
  endOfLine: "auto", // 换行符使用 lf 结尾是 可选值"<auto|lf|crlf|cr>"
};