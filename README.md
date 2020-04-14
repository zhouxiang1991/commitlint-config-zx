# commitlint-config-zx

一个用来检查 git 提交信息的规则

## 提交格式

{type}:{空格}{描述}
其中 type 必须是以下类型之一
描述也是必不可少的

```js
[
  // 源码性修改
  'feat', // 增加了新功能的首次提交,功能可以未完成
  'dev', // 开发未完成的代码
  'debug', // 对已完成的代码的调试包括自测、和后端联调
  'fix', // 修复某个bug
  'pref', // 提升某方面的性能
  'refactor', // 重构代码
  'demand', // 业务需求的变更
  'user', // 提升用户操作体验
  'style', // 不管何时不影响代码逻辑只影响代码外观的代码变更 例如：代码风格变更，空格，回车，注释，变量命名等
  // 非源码性修改
  'depend', // 项目依赖变更
  'docs', // 文档说明相关变更
  'test', // 测试功能相关变更
  'build', // 打包
  'chore', // 非源码性的其他杂项修改
]
```
