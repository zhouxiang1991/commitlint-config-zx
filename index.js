module.exports = {
  parserPreset: 'conventional-changelog-conventionalcommits',
  rules: {
    'type-enum': [
      2,
      'always',
      [
        // 源码性修改
        'feat', // 项目首次发版之后：增加新功能
        'fix', // 项目首次发版之后：修复bug
        'pref', // 项目首次发版之后：提升性能
        'refactor', // 项目首次发版之后：重构代码
        'user', // 项目首次发版后之后：提升用户体验
        'demand', // 项目首次发版之后：需求变更
        'dev', // 项目首次发版之前：未送测之前的代码变更
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
