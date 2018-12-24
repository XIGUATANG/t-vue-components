module.exports = {
  extends: [
    // add more generic rulesets here, such as:
    'standard',
    'plugin:vue/recommended'
  ],
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  // required to lint *.vue files
  plugins: ['vue', 'html'],
  // add your custom rules here
  rules: {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    eqeqeq: [0, 'allow-null'],
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-cond-assign': 0,
    'no-return-assign': 0,
    'one-var': 0,
    quotes: [2, 'single', 'avoid-escape'],
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-dupe-keys': 2, // 对象key重复
    //  "quotes": ["error", "double"],
    'comma-dangle': 2, //定义数组或对象最后多余的逗号
    'no-unused-vars': 1, //变量定义后未使用
    'accessor-pairs': 2, //getter和setter要同时出现
    'use-isnan': 2, //要求检查NaN的时候使用isNaN()
    'no-sparse-arrays': 2, //数组中不允许出现空位置
    'no-native-reassign': 2, //禁止覆盖原生对象
    'keyword-spacing': 1, //关键字后边加空格
    'space-before-function-paren': 1,//函数声明时括号与函数名间加空格
    'space-infix-ops': 1, //字符串拼接操作符 (Infix operators) 之间要留空格。
    'comma-spacing': 1, //逗号前边加空格
    'brace-style': 1, //else 关键字要与花括号保持在同一行。
    'operator-linebreak': 1, //保证三元运算符与他们负责的代码在一行
    'block-spacing': 1,//单行代码块两边加空格。
    'comma-style': 1, //始终将逗号置于行末
    'dot-location': 1, //点号操作符须与属性需在同一行
    'new-cap': 1, //构造函数要以大写字母开头。
    'no-dupe-args': 1, //不要定义冗余的函数参数
    'no-duplicate-imports': 1,//同一模块有多个导入时一次性写完
    'semi-spacing': 1, //遇到分号时空格要后留前不留

    'spaced-comment': 1, //注释首尾留空格 

    //vue
    'vue/no-dupe-keys': 2,
    // 禁止出现语法错误
    'vue/no-parsing-error': 2,
    // 禁止覆盖保留字
    // 'vue/no-reservered-keys': 2,
    // 组件的 data 属性的值必须是一个函数
    // @off 没必要限制
    'vue/no-shared-component-data': 2,
    // 可以让 <template> 使用 key 属性
    'vue/no-template-key': 'off',
    // render 函数必须有返回值
    'vue/require-render-return': 2,
    // prop 的默认值必须匹配它的类型
    'vue/require-valid-default-prop': 2,
    // 计算属性必须有返回值
    'vue/return-in-computed-property': 2,
    'vue/max-attributes-per-line': 0,
    // template 的根节点必须合法
    'vue/valid-template-root': 2,
    'vue/component-name-in-template-casing': 0,
    // v-bind 指令必须合法
    'vue/valid-v-bind': 2,
    // v-cloak 指令必须合法
    'vue/valid-v-cloak': 2,
    // v-else-if 指令必须合法
    'vue/valid-v-else-if': 2,
    // v-else 指令必须合法
    'vue/valid-v-else': 2,
    // v-for 指令必须合法
    'vue/valid-v-for': 2,
    // v-html 指令必须合法
    'vue/valid-v-html': 2,
    // v-if 指令必须合法
    'vue/valid-v-if': 2,
    // v-model 指令必须合法
    'vue/valid-v-model': 2,
    // v-on 指令必须合法
    'vue/valid-v-on': 2,
    // v-once 指令必须合法
    'vue/valid-v-once': 2,
    // v-pre 指令必须合法
    'vue/valid-v-pre': 2,
    // v-show 指令必须合法
    'vue/valid-v-show': 2,
    // v-text 指令必须合法
    'vue/valid-v-text': 2,

    'vue/html-end-tags': 'off',
    // 计算属性禁止包含异步方法
    'vue/no-async-in-computed-properties': 2,
    // 禁止出现难以理解的 v-if 和 v-for
    'vue/no-confusing-v-for-v-if': 2,
    // 禁止出现重复的属性
    'vue/no-duplicate-attributes': 2,
    // 禁止在计算属性中对属性修改, 是具体情况而定，有时候可能会用到，列为warn；
    'vue/no-side-effects-in-computed-properties': 1,
    // 禁止在 <textarea> 中出现 {{message}}
    'vue/no-textarea-mustache': 2,
    // 组件的属性必须为一定的顺序
    'vue/order-in-components': [2, {
      "order": [
        "el",
        ["name", "parent"],
        "functional",
        "delimiters",
        ["components", "directives", "filters"],
        ["extends", "mixins"],
        ["model", "props", "propsData"],
        ["data", "computed"],
        ["watch", "LIFECYCLE_HOOKS"],
        "methods",
        ["template", "render", "renderError"]
      ]
    }],
    // <component> 必须有 v-bind:is
    'vue/require-component-is': 2,
    // prop 必须有类型限制
    'vue/require-prop-types': 2,
    // v-for 指令的元素必须有 v-bind:key
    'vue/require-v-for-key': 2,
    // @fixable 限制 v-bind 的风格, 统一简写形式
    'vue/v-bind-style': 2,
    // @fixable 限制 v-on 的风格，统一简写形式
    'vue/v-on-style': 2,
  }
}
