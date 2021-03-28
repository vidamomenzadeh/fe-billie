module.exports = {
  env: {browser: true, node: true, es6: true},
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended'
  ],
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {jsx: true},
    ecmaVersion: 2018
  },
  plugins: ['react'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, {extensions: ['.js', '.jsx']}],
    'react/jsx-indent-props': ['error', 2],
    'react/prop-types': 0,
    'react/display-name': 1,
    'object-curly-spacing': ['error', 'never'],
    'newline-before-return': 2,
    semi: ['error', 'never'],
    'generator-star-spacing': 0
  },
  settings: {react: {version: 'detect'}},
  overrides: [
    {
      files: ['**/*.test.js'],
      env: {
        jest: true
      }
    }
  ]
}
