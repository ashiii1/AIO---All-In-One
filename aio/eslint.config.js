const { ESLint } = require('eslint');

module.exports = new ESLint({
  baseConfig: {
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
    ],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 12,
      sourceType: 'module',
    },
    plugins: [
      'react',
    ],
    rules: {
      'react/react-in-jsx-scope': 'off',
      'no-unused-vars': 'warn',
      'react/prop-types': 'warn',
      'react/jsx-key': 'warn',
      'react/no-unknown-property': ['error', { ignore: ['class', 'for'] }],
    },
    
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
});
