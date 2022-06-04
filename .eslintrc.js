module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  extends: '@react-native-community',
  rules: {
    semi: [2, 'always'],
    'comma-dangle': [0, 'always'],
    'no-console': 2,
    'no-underscore-dangle': 2,
    'react-native/no-inline-styles': 2,
    'react-native/no-unused-styles': 2,
    'import/newline-after-import': 2,
    'import/order': 2,
    indent: ['error', 2],
    'react/jsx-no-undef': [2, { allowGlobals: true }],
  }
};
