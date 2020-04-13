module.exports = {
  parserPreset: 'conventional-changelog-conventionalcommits',
  rules: {
    'body-leading-blank': [1, 'always'],
    'footer-leading-blank': [1, 'always'],
    'header-max-length': [2, 'always', 72],
    'scope-case': [0, 'always', 'lower-case'],
    'subject-case': [
      0,
      'never',
      ['sentence-case', 'start-case', 'pascal-case', 'upper-case']
    ],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
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
      ],
    ],
  }
}
