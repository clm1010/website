module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended'
  ],
  plugins: [],
  // add your custom rules here
  rules: {
    'prettier/prettier': 'off',
    'nuxt/no-cjs-in-config': 'off',
    'no-lonely-if': 0,
    'require-await': 0,
    'dot-notation': 0,
    'no-console': 0,
    'vue/attributes-order': 0
  }
}
