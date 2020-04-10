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
		'subject-empty': [0, 'never'],
		'subject-full-stop': [2, 'never', '.'],
		'type-case': [2, 'always', 'lower-case'],
		'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
        // 源码性修改
        'feat', // 项目首次发版之后增加新功能
        'fix', // 项目首次发版之后修复bug
        'refactor', // 项目首次发版之后代码大范围变更即为重构
        'pref', // 项目首次发版之后修改代码以提升性能
        'demand', // 项目首次发版之后需求变更
        'update', // 项目首次发版之前的代码变更, 未送测之前的代码变更都算
        'style', // 不影响代码逻辑只影响代码外观的变更 例如：代码风格变更，空格，回车，注释，变量命名等
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
